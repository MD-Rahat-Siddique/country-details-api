fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        const countryInfo = `
            <h3 class="country-name">${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onclick="countryDetail('${country.name.common}')">Details</button>
        `;

        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    });
}

const countryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => countryInfo(data[0]));

    document.getElementById('countries').style.display = "none";
    document.getElementById('countryDetail').style.display = 'block';
}

const countryInfo = country => {
    console.log(country);
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
        <h1>Name : ${country.name.common}</h1>
        <p>Population : ${country.population}</p>
        <p>Area : ${country.area}</p>
        <img src="${country.flags.png}" alt="">
        <button onclick="document.location='index.html'" class="back-button">Back</button>
    `
}