const jobs = document.querySelectorAll(".job");

function checkPosition() {
  jobs.forEach((job) => {
    const rect = job.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
      job.classList.add("in-view");
    } else {
      job.classList.remove("in-view");
    }
  });
}

document.addEventListener("DOMContentLoaded", checkPosition);
window.addEventListener("scroll", checkPosition);
