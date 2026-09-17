// Small enhancement: reveal sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("is-visible");
  });
}, { threshold: 0.08 });

document.querySelectorAll(".case-section, .approach, .about, .intro").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
