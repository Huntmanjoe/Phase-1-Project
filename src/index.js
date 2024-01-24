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
            'Whitecap Margarita': "Whitecap Margarita is a must-have! If you’re a coconut lover, then this is the drink for you!",
            'Blue Margarita': "Blue Margarita saves lives. I love anything blue and the Blue Curacao is delicious! Don't forget the salted rimmed glass!",
            'Smashed Watermelon Margarita': "I love the Smashed Watermelon Margarita because it makes me feel like sunshine when I drink it. It is absolutely my go to when I drop the kids off at grandmas!",
            'Margarita': "I love a classic Margarita. When I tell you this is my favorite drink after a long days of work. You guys have to try it! Enjoy!",
            "Tommy's Margarita": "Tommy's Margarita isn't as ordinary as it may seem. The agave syrup makes it so good to the point that if I don't watch out, I will end up drinking about five of these.",
            'Strawberry Margarita':"Strawberry Margaritas be bussin! Man I love a good ole Classic Margarita and the strawberry schnapps is like candy, this is why I decided to share this recipe!"
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

document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('sub-input').value = '';

    alert("You're subscribed! We will notify you when Cocktail Club updates for the week!");
})

document.getElementById('vote-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const selectedCocktail = document.getElementById('cocktail-select').value;
    if (selectedCocktail) {
        const counterElement = document.getElementById('vote-counter');
        let currentCount = parseInt(counterElement.textContent);
        counterElement.textContent = currentCount + 1;
        document.getElementById('vote-result').textContent = `You voted for: ${selectedCocktail}! Thank you!`;
    } else {
        document.getElementById('vote-result').textContent = 'Please select a cocktail to vote.';
    }
});