// Contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('✅ Thank you for your message! We will contact you soon.');
    this.reset();
});

// Add to cart buttons
const cartButtons = document.querySelectorAll('.add-to-cart');
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('👜 Item added to your cart!');
    });
});
