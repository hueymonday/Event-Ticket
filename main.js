var returnBtn = document.querySelector(".return_btn");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    returnBtn.classList.add("active");
  } else {
    returnBtn.classList.remove("active");
  }
});

window.addEventListener("click", function () {
  this.window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
