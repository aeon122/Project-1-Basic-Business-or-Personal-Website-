document.addEventListener('DOMContentLoaded', () => {
    const orderData = localStorage.getItem('pizzaOrder');
    const container = document.getElementById('order-details');
    if (!orderData) {
        container.textContent = "No order data found. Please customize your pizza first.";
        return;
    }
    const order = JSON.parse(orderData);
    // Build order display HTML
    let html = '<ul>';
    html += `<li><span class="label">Pizza:</span> ${order.pizza || 'N/A'}</li>`;
    html += `<li><span class="label">Size:</span> ${order.size || 'N/A'}</li>`;
    if (order.toppings && order.toppings.length > 0) {
        html += `<li><span class="label">Toppings:</span> ${order.toppings.join(', ')}</li>`;
    } else {
        html += `<li><span class="label">Toppings:</span> None</li>`;
    }
    html += `<li><span class="label">Crust:</span> ${order.crust || 'N/A'}</li>`;
    html += '<hr style="border-color:#555;">';
    html += `<li><span class="label">First Name:</span> ${order.first_name || 'N/A'}</li>`;
    html += `<li><span class="label">Last Name:</span> ${order.last_name || 'N/A'}</li>`;
    html += `<li><span class="label">Email:</span> ${order.email || 'N/A'}</li>`;
    html += `<li><span class="label">Phone:</span> ${order.phone || 'N/A'}</li>`;
    html += `<li><span class="label">Message / Special Instructions:</span> ${order.message || 'N/A'}</li>`;
    html += '</ul>';
    container.innerHTML = html;
});