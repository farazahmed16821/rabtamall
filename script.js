// script.js

document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".product-whatsapp-button");
  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("واٹس ایپ پر رابطہ کرنے کے لیے ری ڈائریکٹ ہو رہے ہیں۔");
    });
  });
});
const products = [
  { title: "Naya Product", image: "images/newimage.jpg" },
  { title: "Doosra Product", image: "images/secondimage.jpg" }
];
const products = [
  // پہلے سے موجود پروڈکٹس...
  { title: "Stylish Shirt", image: "images/shirt1.jpg" },
  { title: "Elegant Watch", image: "images/watch1.jpg" },
  { title: "Casual Shoes", image: "images/shoes1.jpg" },
  { title: "Sunglasses", image: "images/sunglasses1.jpg" },
  { title: "Leather Wallet", image: "images/wallet1.jpg" },

  // آپ کے لیے نئے واچ باکسز:
  { title: "Classic Watch", image: "images/watch2.jpg" },
  { title: "Sporty Watch", image: "images/watch3.jpg" }
];
