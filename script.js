/// function continent

//
let countriesArr = [];
async function getContinentCountries(region) {
  try {
    let response = await fetch(`https://restcountries.com/v2/region/${region}`);
    if (!response.ok) throw Error("ERROR!!");
    let data = await response.json();
    // console.log(data);
    data.forEach((country) => {
      countriesArr.push({
        name: country.name,
        population: country.population,
      });
    });
    // console.log(countriesArr);
  } catch (erroe) {
    console.log("error");
  }
}

console.log(countriesArr);

function getCountriesNames() {}

function getCountriesPopulation() {}

function createButtons() {}
