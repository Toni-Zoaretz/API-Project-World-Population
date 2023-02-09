const africa = document.querySelector(".africa");
const america = document.querySelector(".america");
const asia = document.querySelector(".asia");
const europe = document.querySelector(".europe");
const oceania = document.querySelector(".oceania");

let region = "";

africa.addEventListener("click", function () {
  region = "africa";
  getContinentCountries(region);
});

america.addEventListener("click", function () {
  region = "Americas";
  getContinentCountries(region);
});

asia.addEventListener("click", function () {
  region = "asia";
  getContinentCountries(region);
});

europe.addEventListener("click", function () {
  region = "europe";
  getContinentCountries(region);
});

oceania.addEventListener("click", function () {
  region = "oceania";
  getContinentCountries(region);
});
