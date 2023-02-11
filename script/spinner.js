const btnTest = document.querySelector("#test");
const loader = document.querySelector(".loader");

btnTest.addEventListener("click", function () {
  loader.classList.remove("loader-hidden");
});

loader.addEventListener("transitionend", () => {
  loader.classList.add("loader-hidden");
});
