const products = document.querySelectorAll('.product');
const selectedProduct = document.getElementById('selectedProduct');
const selectedImage = document.getElementById('selectedImage');
const selectedName = document.getElementById('selectedName');
const selectedPrice = document.getElementById('selectedPrice');
const bookingForm = document.getElementById('bookingForm');

products.forEach(product => {
  product.addEventListener('click', () => {
    const name = product.dataset.name;
    const price = product.dataset.price;
    const image = product.dataset.image;

    selectedImage.src = image;
    selectedName.textContent = name;
    selectedPrice.textContent = price;

    selectedProduct.classList.remove('hidden');
    bookingForm.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.getElementById('bookNowForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Booking confirmed for ' + selectedName.textContent + '!');
});