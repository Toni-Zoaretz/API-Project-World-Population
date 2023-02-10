let region = "";

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
