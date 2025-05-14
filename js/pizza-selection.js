// pizza-selection.js
document.addEventListener("DOMContentLoaded", () => {
    const pizzaCards = document.querySelectorAll('.pizza-card');

    pizzaCards.forEach(card => {
        card.addEventListener('click', () => {
            const pizzaType = card.getAttribute('data-pizza');
            window.location.href = `customize.html?pizza=${pizzaType}`;
        });
    });
});
