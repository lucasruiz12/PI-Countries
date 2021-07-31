const axios = require('axios');
const { BASE_URL } = process.env;
const { Country } = require('../db')

const url = BASE_URL

const getCountriesToDb = async () => {
    const getCountries = await axios.get(url);
    const allCountries = getCountries.data;
    try {
        const modelCountries = allCountries.map((el) => {
            return {
                name: el.name,
                id: el.alpha3Code,
                img: el.flag,
                continent: el.region,
                capital: el.capital,
                subregion: el.subregion,
                area: el.area,
                population: el.population
            };
        });
        modelCountries.forEach(async(el) =>{
            await Country.findOrCreate({
                where:{
                    name: el.name,
                    id: el.id,
                    img: el.img,
                    continent: el.continent,
                    capital: el.capital,
                    subregion: el.subregion,
                    area: el.area,
                    population: el.population

                },
            });
        });
        console.log('Countries loaded in DB, kinga 😉')
    }
    catch(error) {
        console.log('En la carga de la DB tenés el siguiente error: ', error)
    }
}

module.exports = { getCountriesToDb }