// Small interaction for the portfolio demo.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.add("navigated");
  });
});