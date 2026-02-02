const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const twilio = require("twilio");

const app = express();
app.use(express.json());

const db = new sqlite3.Database("./users.db");

// Twilio setup
const accountSid = "YOUR_TWILIO_ACCOUNT_SID";
const authToken = "YOUR_TWILIO_AUTH_TOKEN";
const client = twilio(accountSid, authToken);

let otpStore = {}; // temporary storage

// Send OTP
app.post("/send-otp", (req, res) => {
  const { contact } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpStore[contact] = otp;

  client.messages.create({
    body: `Your OTP is ${otp}`,
    from: "YOUR_TWILIO_PHONE_NUMBER",
    to: contact
  })
  .then(() => res.json({ message: "OTP sent" }))
  .catch(err => res.status(500).json({ message: "Error sending OTP", error: err.message }));
});

// Verify OTP + Save user
app.post("/verify-otp", (req, res) => {
  const { firstName, lastName, contact, otp } = req.body;
  if (otpStore[contact] !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  const query = `INSERT INTO users (firstName, lastName, contact)
                 VALUES (?, ?, ?)
                 ON CONFLICT(contact) DO UPDATE SET
                 firstName=excluded.firstName,
                 lastName=excluded.lastName`;

  db.run(query, [firstName, lastName, contact], function(err) {
    if (err) return res.status(500).json({ message: "Database error", error: err.message });
    delete otpStore[contact]; // clear OTP after success
    res.json({ message: "Login successful", user: { firstName, lastName, contact } });
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
