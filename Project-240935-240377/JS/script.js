document.addEventListener('DOMContentLoaded', () => {
    console.log('Silkbotanics website loaded successfully.');

    const productGrid = document.getElementById('product-grid');
    const productCards = productGrid.getElementsByClassName('product-card');
    const totalProducts = productCards.length;

    const totalProductsElement = document.getElementById('total-products');
    totalProductsElement.textContent = totalProducts;
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity-input');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');

    increaseBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    decreaseBtn.addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
});

document.getElementById('review-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const stars = document.getElementById('review-stars').value;
    const reviewText = document.getElementById('review-text').value;

    const reviewList = document.querySelector('.review-list');
    const newReview = document.createElement('div');
    newReview.classList.add('review');
    newReview.innerHTML = `
        <p><strong>You:</strong> ${reviewText}</p>
        <span>${'⭐'.repeat(stars)}</span>
    `;

    reviewList.appendChild(newReview);

    document.getElementById('review-form').reset();
});