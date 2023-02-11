// -----------------------------------------------------------------------------------------------------------------------------------------
const ctx = document.getElementById("myChart");
let isChart = false;
// -----------------------------------------------------------------------------------------------------------------------------------------
let countriesNamesArr = [];
let countriesPopulationArr = [];
async function getContinentCountriesData(region) {
  try {
    let response = await fetch(`https://restcountries.com/v2/region/${region}`);
    if (!response.ok) throw Error("ERROR!!");
    let data = await response.json();
    countriesNamesArr = [];
    countriesPopulationArr = [];
    data.forEach((country) => {
      countriesNamesArr.push(country.name);
      countriesPopulationArr.push(country.population);
    });
    createbtn(countriesNamesArr);
    drawChart(countriesNamesArr, countriesPopulationArr);
  } catch (erroe) {
    console.log("error");
  }
}
// -----------------------------------------------------------------------------------------------------------------------------------------
function createbtn(countriesNamesArr) {
  for (let i = 0; i < countriesNamesArr.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = countriesNamesArr[i];
    btnBox.appendChild(btn);
  }
}
// -----------------------------------------------------------------------------------------------------------------------------------------
let country = "";
function getOneCountryName() {
  btnBox.addEventListener("click", function (e) {
    country = e.target.innerText;
    console.log(country);
    getCountriesCitiesData(country);
    loader.classList.remove("loader-hidden");
    loader.addEventListener("transitionend", () => {
      loader.classList.add("loader-hidden");
    });
  });
}

getOneCountryName();
// -----------------------------------------------------------------------------------------------------------------------------------------
let citiesNamesArr = [];
let citiesPopulationArr = [];
async function getCountriesCitiesData(country) {
  try {
    const response = await fetch(
      "https://countriesnow.space/api/v0.1/countries/population/cities/filter",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 1000,
          order: "asc",
          orderBy: "name",
          country: `${country}`,
        }),
      }
    );
    let data = await response.json();
    citiesNamesArr = [];
    citiesPopulationArr = [];
    if (!response.ok) {
      myChart.destroy();
      hiddenDivMessage.style.visibility = "visible";
      throw Error("ERROR!!");
    }
    data.data.forEach((cityName) => {
      citiesNamesArr.push(cityName.city);
      citiesPopulationArr.push(cityName.populationCounts[0].value);
    });
    hiddenDivMessage.style.visibility = "hidden";
    drawChart(citiesNamesArr, citiesPopulationArr);
    console.log(citiesPopulationArr);
    console.log(citiesNamesArr);
  } catch (error) {
    console.log("error");
  }
}
// -----------------------------------------------------------------------------------------------------------------------------------------
function drawChart(country, population) {
  countriesNamesArr = [];
  countriesPopulationArr = [];

  if (isChart === true) {
    myChart.destroy();
  }
  isChart = true;
  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: country,
      datasets: [
        {
          label: "number of Population",
          data: population,
          borderWidth: 1,
          borderColor: "#017a47",
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
