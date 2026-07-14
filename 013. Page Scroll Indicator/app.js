
 const indicator = document.querySelector(".scroll-indicator .progress");

window.addEventListener("scroll", updateProgress);

function updateProgress() {
  const scrollTop = window.scrollY;

  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrolled = (scrollTop / scrollHeight) * 100;

  indicator.style.width = `max(20px, ${scrolled}%)`;
}
