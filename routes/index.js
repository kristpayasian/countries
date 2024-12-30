const express = require("express");
const router = express.Router();
const {fetchAllCountries, fetchCountryByName} = require('./countries');

const countries = [
  { name: "United States", flag: "https://flagcdn.com/w320/us.png", population: "323.947.000", region: "Americas", capital: "Washington, D.C."},
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png", population: "81.770.900", region: "Europe", capital: "Berlin", nativeName:"Bundesrepublik Deutschland", subRegion:"Western Europe",topDomain:".gr", currency:"Euro",language:"German" , borders:['Denmark', 'Poland', 'Czechia', 'Switzerland', 'France', 'Luxembourg', 'Belgium', 'Netherlands', 'Austria']},
  { name: "Brazil", flag: "https://flagcdn.com/w320/br.png", population: "206.135.893", region: "Americas", capital: "Brasilia" },
  { name: "Iceland", flag: "https://flagcdn.com/w320/is.png", population: "334.300", region: "Europe", capital: "Reykjavik" },
  { name: "Afghanistan", flag: "https://flagcdn.com/w320/af.png", population: "27.657.145", region: "Asia", capital: "Kabul" },
  { name: "Aland Islands", flag: "https://flagcdn.com/w320/ax.png", population: "28.875", region: "Europe", capital: "Mariehamn" },
  { name: "Albania", flag: "https://flagcdn.com/w320/al.png", population: "2.886.026", region: "Europe", capital: "Tirana" },
  { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png", population: "40.400.000", region: "Africa", capital: "Algeris" },
];


router.get("/", (req, res) => {
    fetchAllCountries() .then (countries => res.render("index", { countries }));
  
});


router.get("/empty", (req, res) => {
  res.render("empty");
});


router.get("/:countryName", (req, res) => {
  const countryNameParam = req.params.countryName;
  const countryName = decodeURIComponent(countryNameParam);
  console.log(countryName);
  
//   const country = countries.find(c => c.name.toLowerCase() === countryName.toLowerCase());

    fetchCountryByName(countryName).then(result => {
        if (result) {
            console.log(result[0].currencies);
            
            
            res.render("country", { country: result[0] });
          } else {
            res.status(404).send("Country not found");
          }
    })
  
});

module.exports = router;
