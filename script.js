const cards = document.querySelectorAll(".flip-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
    const msg = card.getAttribute("data-message");
    card.querySelector(".msg").textContent = msg;
  });
});
