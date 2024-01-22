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
        const ingredients = document.querySelector('#ingred-instruc .ingredients');
        const instructions = document.querySelector('#ingred-instruc .instructions');
    
        image.src = drink.strDrinkThumb;
        name.textContent = drink.strDrink;
        ingredients.textContent = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4].join(', ');
        instructions.textContent = drink.strInstructions;

        const descriptionDisplay = document.getElementById('descriptionDisplay');
        const drinkDescriptions = {
            'Whitecap Margarita': 'Whitecap Margarita is a must-have! If you’re a coconut lover, then this is the drink for you!',
    }
    descriptionDisplay.textContent = drinkDescriptions[drink.strDrink] || 'No description available.';
    }

document.getElementById('comment-form').addEventListener('submit', function(event) { 
    event.preventDefault();

    let currentDate = new Date();
    let timestamp = currentDate.toLocaleString();
    let timestampParagraph = document.createElement('p');

    let name = document.getElementById('name-input').value;
    let comment = document.getElementById('comment-input').value;
    let commentDiv = document.createElement('div');
    let nameParagraph = document.createElement('p');
    let commentParagraph = document.createElement('p');
    timestampParagraph.textContent = 'Posted on: ' + timestamp;
    timestampParagraph.style.fontSize = '0.8em';

    nameParagraph.textContent = name + ' says:';
    commentParagraph.textContent = '"' + comment + '"';
    commentDiv.appendChild(nameParagraph);
    commentDiv.appendChild(commentParagraph);
    commentDiv.appendChild(timestampParagraph);

    document.getElementById('comments-container').appendChild(commentDiv);
    document.getElementById('name-input').value = '';
    document.getElementById('comment-input').value = '';


});

