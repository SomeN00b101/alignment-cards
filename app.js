// app.js
const cardContainer = document.getElementById('card-container');

function createCard(title, content) {
    const card = document.createElement('div');
    card.classList.add('card'); // Add a CSS class for styling

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Loop through the data and render each card
cardsData.forEach(data => {
    const newCard = createCard(data.title, data.content);
    cardContainer.appendChild(newCard);
});
