const continentDiv = document.querySelector(".continent");
const loader = document.querySelector(".loader");

continentDiv.addEventListener("click", function (e) {
  btnBox.innerHTML = "";
  loader.classList.remove("loader-hidden");
  getContinentCountriesData(e.target.classList[0]);
  console.log(e.target);
});

loader.addEventListener("transitionend", () => {
  loader.classList.add("loader-hidden");
});
