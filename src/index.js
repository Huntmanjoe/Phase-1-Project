document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(drink => {
                const drinkImg = document.createElement('img');
                drinkImg.src = drink.strDrinkThumb;
                drinkImg.alt = drink.strDrink;
                drinkImg.addEventListener('click', () => drinkDisplay(drink));
                document.querySelector('#weekly-cocktails').appendChild(drinkImg);
               drinkDisplay(data[0]); 
            });
        })
    .catch(error => console.error('Error fetching data:', error));
});

    function drinkDisplay(drink) {
        const image = document.querySelector('#cocktail-information .main-image');
        const name = document.querySelector('#cocktail-information .name');
        const ingredients = document.querySelector('#cocktail-information .ingredients');
        const instructions = document.querySelector('#cocktail-information .instructions');
    
        image.src = drink.strDrinkThumb;
        name.textContent = drink.strDrink;
        ingredients.textContent = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4].join(', ');
        instructions.textContent = drink.strInstructions;
    }

