const slider = document.querySelector(".slider");
let scroll = 0;

setInterval(() => {
  if(slider){
    slider.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
    scroll += 300;
    if (scroll >= slider.scrollWidth) scroll = 0;
  }
}, 3000);
function openHelpCenter() {
  alert("📞 WhatsApp: +91-XXXXXXXXXX\n📧 Email: support@balloonbliss.com");
}


function openCityModal() {
    const modal = document.getElementById('cityModal');
    if (modal) {
        modal.style.display = 'flex'; // Use 'flex' if your CSS centers the popup
    }
}

// Function to close the modal
function closeCityModal() {
    const modal = document.getElementById('cityModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Function to handle city selection
function selectCity(cityName) {
    console.log("Selected City:", cityName);
    
    // 1. Update the button text to show the selected city
    const cityButton = document.querySelector('.location-indicator button');
    if (cityButton) {
        cityButton.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${cityName}`;
    }

    // 2. Save to local storage so the site remembers the choice
    localStorage.setItem('selectedCity', cityName);

    // 3. Close the modal
    closeCityModal();
}

// Optional: Close modal if user clicks outside the popup box
window.onclick = function(event) {
    const modal = document.getElementById('cityModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// Define your menu items
// Define menu arrays
const anniversaryItems = [
  { text: "Candlelight Dinner", url: "candlelight.html" },
  { text: "Rooftop Dinners", url: "rooftop.html" },
  { text: "Poolside Dinners", url: "poolside.html" },
  { text: "Private Dinner & Movie", url: "private-dinner.html" },
  { text: "Lunch Special Dining", url: "lunch.html" }
];

const birthdayItems = [
  { text: "Birthday Decorations", url: "birthday.html" },
  { text: "Birthday Decors for Him", url: "birthday-him.html" },
  { text: "Birthday Decors for Her", url: "birthday-her.html" },
  { text: "1st Birthday Decorations", url: "birthday-1st.html" },
  { text: "18th Birthday Special", url: "birthday-18.html" }
];

const decorationItems = [
  { text: "Balloon Decorations", url: "balloon.html" },
  { text: "Rosegold Theme", url: "rosegold.html" },
  { text: "Umbrella Decorations", url: "umbrella.html" },
  { text: "Flower Decoration", url: "flower.html" },
  { text: "Car Boot Decorations", url: "carboot.html" }
];
const CanlelightItems = [
  { text: "Canlelight Dinners in Delhi NCR", url: "Canlelight Dinners in Delhi NCR.html" },
  { text: "Private Candlelight Dinners", url: "Private Candlelight Dinners.html" },
  { text: "Lunch Special Dining", url: "Lunch Special Dining.html" },
  { text: "Rooftop Candlelight Dinners", url: "Rooftop Candlelight Dinners.html" },
  { text: "Poolside Candlelight Dinners", url: "Poolside Candlelight Dinners.html" }
];
const KidCelebrationsItems = [
  { text: "Kids Birthday Decoration", url: "KidsCelebration.html" },
  { text: "Welcome Baby Decorations", url: "KidsCelebration.html" },
  { text: "Baby Shower Decorations", url: "KidsCelebration.html" },
  { text: "Naming Ceremony Decorations", url: "KidsCelebration.html" },
  { text: "1st Birthday Decorations", url: "KidsCelebration.html" },
  { text: "18th Birthday Special", url: "KidsCelebration.html" },
  { text: "Annaprashan Decorations", url: "KidsCelebration.html" }
];
const FestivalsItems = [
  { text: "Lohri Decorations", url: "IndianFestival.html" },
  { text: "Republic Day Decorations", url: "IndianFestival.html" },
  { text: "Valentine's Day Special", url: "IndianFestival.html" },
  { text: "Holi Decorations", url: "IndianFestival.html" },
  { text: "Mother's Day Special", url: "IndianFestival.html" },
  { text: "Father's Day Special", url: "IndianFestival.html" },
  { text: "Guruji Birthday Setups", url: "IndianFestival.html" },
  { text: "Independence Day Decorations", url: "IndianFestival.html" },
  { text: "Raksha Bandhan Decorations", url: "IndianFestival.html" },
  { text: "Janmashtmi Decorations", url: "IndianFestival.html" },
  { text: "Ganesh Chaturthi", url: "IndianFestival.html" },
  { text: "Navratri Decorations", url: "IndianFestival.html" },
  { text: "Halloween Decorations", url: "IndianFestival.html" },
  { text: "Karwa Chauth Decorations", url: "IndianFestival.html" },
  { text: "Diwali Decorations", url: "IndianFestival.html" },
  { text: "Christmas Decorations", url: "IndianFestival.html" },
  { text: "New Year Party Decorations", url: "IndianFestival.html" }
];


// Generic function to populate dropdowns
function populateMenu(id, items) {
  const menu = document.getElementById(id);
  if (!menu) return;

  menu.innerHTML = ""; // Clear existing items

  items.forEach(item => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.className = "dropdown-item";
    link.href = item.url;   // ✅ clickable link
    link.textContent = item.text;
    li.appendChild(link);
    menu.appendChild(li);
  });
}

// Populate all menus
populateMenu("anniversary-menu", anniversaryItems);
populateMenu("birthday-menu", birthdayItems);
populateMenu("decorations-menu", decorationItems);
populateMenu("Kid's Celebrations-menu", KidCelebrationsItems);
populateMenu("Canlelight Dinners-menu", CanlelightItems);
populateMenu("Festivals-menu", FestivalsItems);
const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % dots.length;
  showSlide(nextIndex);
}

function goToSlide(index) {
  showSlide(index);
}

function handleClick(index) {
  alert("You clicked slide " + (index + 1));
  // You can redirect or open modal here
}

setInterval(nextSlide, 4000); // Auto-slide every 4 seconds
showSlide(0); // Initialize
