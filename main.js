// Meal search...
document.getElementById('search-btn').addEventListener('click', () => {
    const searchMeal = document.getElementById('search-meal');
    const searchMealName = searchMeal.value;
    // console.log(searchMealName);
    displayMeal(searchMealName);
})

const displayMeal = meals => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${meals}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

const mealInfo = mealName => {
    const mealDetail = document.getElementById('meal-details');
    for (let i = 0; i < mealName.length; i++) {
        const mealList = mealName[i];
        
    }
}






/*

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.population}</p>
        <p>${country.area}</p>
        <img src="${country.flag}">
    `
}
*/