// Define your product list
const products = [
  { title: "Valentine Special", image: "Products/Valentine_Cart.avif", link: "valentine.html" },
  { title: "Birthday", image: "Products/Birthday Cart.avif", link: "birthday.html" },
  { title: "Baby Shower", image: "Products/Baby Shower Cart.avif", link: "babyshower.html" },
  { title: "Baby Welcome", image: "Products/Welcome Baby Cart.avif", link: "babyshower.html" },
  { title: "Candlelight Dinner", image: "Products/Candlelight Dinner Cart.avif", link: "candlenight.html" },
  { title: "Wedding Anniversary", image: "Products/Wedding Anniversary Cart.avif", link: "Anniversary.html" },
  { title: "Party Decorations", image: "Products/Part Decoration Cart.avif", link: "valentine.html" },
  { title: "Haldi Mehndi", image: "Products/Haldi Mehndi Cart.avif", link: "haldi.html" }
];

// Find the container
const grid = document.getElementById("productGrid");

// Inject cards dynamically
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.onclick = () => window.location.href = product.link;

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;

  const title = document.createElement("h3");
  title.textContent = product.title;

  card.appendChild(img);
  card.appendChild(title);
  grid.appendChild(card);
});
