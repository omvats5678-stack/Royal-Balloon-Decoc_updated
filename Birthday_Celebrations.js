// Define your birthday product list
const birthdayProducts = [
  {
    title: "Classic Balloon Arch",
    image: "Products/Birthday_Classic.avif",
    description: "Colorful balloon arch with banner and streamers",
    originalPrice: "₹3,499",
    discountedPrice: "₹2,499",
    discount: "29% OFF",
    rating: "★★★★☆ 4.6 (312 reviews)",
    link: "booking.html"
  },
  {
    title: "Party Time Package",
    image: "Products/Birthday_Party.avif",
    description: "Complete party setup with balloons, banners, and table decor",
    originalPrice: "₹5,599",
    discountedPrice: "₹3,999",
    discount: "29% OFF",
    rating: "★★★★★ 4.8 (456 reviews)",
    link: "booking.html"
  },
  {
    title: "Theme Birthday Setup",
    image: "Products/Birthday_Theme.avif",
    description: "Customized theme decoration with props and backdrop",
    originalPrice: "₹7,699",
    discountedPrice: "₹5,499",
    discount: "29% OFF",
    rating: "★★★★★ 4.9 (567 reviews)",
    link: "booking.html"
  },
  {
    title: "Kids Party Special",
    image: "Products/Birthday_Kids.avif",
    description: "Fun decorations with cartoon characters and colorful balloons",
    originalPrice: "₹6,299",
    discountedPrice: "₹4,499",
    discount: "29% OFF",
    rating: "★★★★★ 4.9 (423 reviews)",
    link: "booking.html"
  },
  {
    title: "LED Neon Birthday",
    image: "Products/Birthday_LED.avif",
    description: "Modern LED neon lights with metallic balloons and confetti",
    originalPrice: "₹9,099",
    discountedPrice: "₹6,499",
    discount: "29% OFF",
    rating: "★★★★★ 4.8 (387 reviews)",
    link: "booking.html"
  },
  {
    title: "Grand Celebration Pack",
    image: "Products/Birthday_Grand.avif",
    description: "Premium birthday decoration with all accessories and photo booth",
    originalPrice: "₹12,699",
    discountedPrice: "₹8,999",
    discount: "29% OFF",
    rating: "★★★★★ 5.0 (612 reviews)",
    link: "booking.html"
  }
];

// Find the container
const grid = document.getElementById("birthdayGrid");

// Inject cards dynamically
birthdayProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.onclick = () => window.location.href = product.link;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;

  const title = document.createElement("h3");
  title.textContent = product.title;

  const desc = document.createElement("p");
  desc.textContent = product.description;

  const price = document.createElement("p");
  price.innerHTML = `<span class="original-price">${product.originalPrice}</span> 
                     <span class="discounted-price">${product.discountedPrice}</span> 
                     <span class="discount">${product.discount}</span>`;

  const rating = document.createElement("p");
  rating.className = "rating";
  rating.textContent = product.rating;

  const button = document.createElement("button");
  button.textContent = "BOOK NOW";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(price);
  card.appendChild(rating);
  card.appendChild(button);

  grid.appendChild(card);
});
