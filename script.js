
let current = 0;
const sections = document.querySelectorAll(".section");

function nextSection() {
  if (current < sections.length - 1) {
    sections[current].classList.remove("visible");
    current += 1;
    sections[current].classList.add("visible");
  }
}

function respondNo() {
  document.getElementById("no-message").classList.remove("hidden");
}

function respondYes() {
  document.getElementById("question").classList.remove("visible");
  document.getElementById("final").classList.add("visible");
}
