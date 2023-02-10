const africa = document.querySelector(".africa");
const america = document.querySelector(".america");
const asia = document.querySelector(".asia");
const europe = document.querySelector(".europe");
const oceania = document.querySelector(".oceania");
const btnBox = document.querySelector(".all-btn");
const allContinentBtn = document.querySelectorAll(".continent-btn");

let region = "";

// allContinentBtn.forEach((continent) => {
//   continent.addEventListener("click", function (e) {
//     getContinentCountries(e.target.innerText);
// btnBox.innerHTML = "";
//   });
// });

africa.addEventListener("click", function () {
  region = "africa";
  getContinentCountriesData(region);
  btnBox.innerHTML = "";
});

america.addEventListener("click", function () {
  region = "Americas";
  getContinentCountriesData(region);
  btnBox.innerHTML = "";
});

asia.addEventListener("click", function () {
  region = "asia";
  getContinentCountriesData(region);
  btnBox.innerHTML = "";
});

europe.addEventListener("click", function () {
  region = "europe";
  getContinentCountriesData(region);
  btnBox.innerHTML = "";
});

oceania.addEventListener("click", function () {
  region = "oceania";
  getContinentCountriesData(region);
  btnBox.innerHTML = "";
});

// ---------------event listenr of all the btn---------------
