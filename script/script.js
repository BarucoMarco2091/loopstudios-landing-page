const cardData = [
    {
        image: "assets/images/desktop/image-deep-earth.jpg",
        description: "DEEP EARTH",
    },
    {
        image: "assets/images/desktop/image-night-arcade.jpg",
        description: "NIGHT ARCADE",
    },
    {
        image: "assets/images/desktop/image-soccer-team.jpg",
        description: "SOCCER TEAM VR",
    },
    {
        image: "assets/images/desktop/image-grid.jpg",
        description: "THE GRID",
    },
    {
        image: "assets/images/desktop/image-from-above.jpg",
        description: "FROM UP ABOVE VR",
    },
    {
        image: "assets/images/desktop/image-pocket-borealis.jpg",
        description: "POCKET BOREALIS",
    },
    {
        image: "assets/images/desktop/image-curiosity.jpg",
        description: "THE CURIOSITY",
    },
    {
        image: "assets/images/desktop/image-fisheye.jpg",
        description: "MAKE IT FISHEYE",
    },
]

function loadCards() {
    const cardGrid = document.querySelector('.card-grid');
    cardData.forEach((item) => {
        const newCardGrid = document.createElement('div');
        newCardGrid.className = 'new-card-grid';
        const newCard = document.createElement('div');
        newCard.className = 'new-card';
        newCard.innerHTML =
            `
            <img class="card-img" src="${item.image}" alt="card-img">
            <p class="card-paragraph">${item.description}</p>
            `
        cardGrid.appendChild(newCardGrid);
        newCardGrid.appendChild(newCard);
    });
};

document.addEventListener('DOMContentLoaded', loadCards());
