// Example: WhatsApp button click
document.querySelector(".btn-white")?.addEventListener("click", () => {
  window.open("https://wa.me/your-number", "_blank");
});

// Call button
document.querySelector(".btn-glass")?.addEventListener("click", () => {
  window.location.href = "tel:+15551234567";
});