document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageEl = document.getElementById('formMessage');
  if (!name || !email) {
    messageEl.textContent = "Please fill in all fields.";
    messageEl.style.color = "red";
    return;
  }
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    messageEl.textContent = "Invalid email address.";
    messageEl.style.color = "red";
    return;
  }
  messageEl.textContent = "Thanks! Your message has been sent.";
  messageEl.style.color = "green";
  this.reset();
});
