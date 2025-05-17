document.getElementById('pizzaForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = {};
    // Single-value inputs
    ['pizza', 'size', 'crust', 'first_name', 'last_name', 'email', 'phone', 'message'].forEach(key => {
        data[key] = formData.get(key) || '';
    });
    // Toppings (multiple checkboxes with same name "toppings")
    const toppings = formData.getAll('toppings');
    data.toppings = toppings;
    localStorage.setItem('pizzaOrder', JSON.stringify(data));
    window.location.href = 'order.html';
});