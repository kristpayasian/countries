module.exports = {

    async fetchAllCountries() {
        const response = await fetch('https://restcountries.com/v2/all?fields=name,capital,flags,population,region,alpha3Code');
    
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`, {cause: {status: response.status}});
        }
    
        return await response.json();
    },
    async fetchCountryByName(name) {
        const response = await fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,currencies,flags,population,region,subregion,topLevelDomain,languages,borders,nativeName`);

        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`, {cause: {status: response.status}});
        }

        return await response.json();
    },
}
