// Meal search...
const mealSearchBtn = () => {
    const searchMeal = document.getElementById('search-meal').value;
    document.getElementById('search-meal').value = '';
    // data load..
    toggleSpinner();
    if (searchMeal === '') {
        alert('Sorry, please type food name');
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
    }
}
// Search by press enter button..
const searchMeal = document.getElementById("search-meal");
searchMeal.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
   document.getElementById("search-btn").click();
  }
});

//display meal info...
const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = "";
    meals.forEach(mealName => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'meal-style';
        const mealInfo = `
        <div onclick ="getMealFullInfo(${mealName.idMeal})">
        <img src ="${mealName.strMealThumb}">
        <h3>${mealName.strMeal}</h3>
        </div>
        `;
        mealDiv.innerHTML = mealInfo;
        mealContainer.appendChild(mealDiv);
        toggleSpinner();
    });

}

const getMealFullInfo = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = mealDetails => {
    const detailDiv = document.getElementById('display-meal-info');
    detailDiv.innerHTML =`
    <div class = "style">
    <img src ="${mealDetails.strMealThumb}">
    <h5>${mealDetails.strMeal}</h5>
    <h6>Ingredients</h6>
    <ul>
        <li>${mealDetails.strMeasure1}</li>
        <li>${mealDetails.strMeasure2}</li>
        <li>${mealDetails.strMeasure3}</li>
        <li>${mealDetails.strMeasure4}</li>
        <li>${mealDetails.strMeasure5}</li>
    </ul>
    </div>
    `;
}

// Load Spinner..
const toggleSpinner = () => {
    const spinner = document.getElementById('load-spinner');
    const meals = document.getElementById('meal-container');
    spinner.classList.toggle('d-none');
    meals.classList.toggle('d-none');
}