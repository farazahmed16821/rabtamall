// script.js

document.addEventListener("DOMContentLoaded", function () {
  const whatsappButtons = document.querySelectorAll(".product-whatsapp-button");
  whatsappButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("واٹس ایپ پر رابطہ کرنے کے لیے ری ڈائریکٹ ہو رہے ہیں۔");
    });
  });
});
