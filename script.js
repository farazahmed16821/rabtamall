let cart = [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ name: name, price: price, qty: 1 });
    }
    renderCart();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    renderCart();
}

function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceP = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>آپ کا کارٹ خالی ہے۔</p>';
        totalPriceP.textContent = '';
        return;
    }

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <span>${item.name} × ${item.qty}</span>
            <span>₹${item.price * item.qty}</span>
            <button onclick="removeFromCart('${item.name}')">حذف کریں</button>
        `;
        cartItemsDiv.appendChild(div);
    });

    totalPriceP.textContent = `کل رقم: ₹${total}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('براہ کرم پہلے کچھ مصنوعات کارٹ میں ڈالیں۔');
        return;
    }
    alert('شکریہ! آپ کا آرڈر موصول ہو گیا ہے۔ جلد رابطہ کیا جائے گا۔');
    cart = [];
    renderCart();
}

window.onload = function () {
    renderCart();
};
// script.js

console.log("Website loaded successfully!");

alert("میرے پیارے کسٹمرز خوش امدید RabtaMall پر");
