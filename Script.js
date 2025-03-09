 document.addEventListener('DOMContentLoaded', function() {
    const listings = [
        {
            id: 1,
            title: 'Przytulne mieszkanie w centrum',
            location: 'Warszawa, Polska',
            price: '200 zł/noc',
            image: 'images/apartment1.jpg'
        },
        {
            id: 2,
            title: 'Nowoczesny apartament nad morzem',
            location: 'Gdańsk, Polska',
            price: '300 zł/noc',
            image: 'images/apartment2.jpg'
        },
        {
            id: 3,
            title: 'Dom z widokiem na góry',
            location: 'Zakopane, Polska',
            price: '250 zł/noc',
            image: 'images/apartment3.jpg'
        }
    ];

    const listingGrid = document.getElementById('listing-grid');

    listings.forEach(listing => {
        const listingCard = document.createElement('div');
        listingCard.classList.add('listing-card');

        listingCard.innerHTML = `
            <img src="${listing.image}" alt="${listing.title}">
            <h3>${listing.title}</h3>
            <p>${listing.location}</p>
            <p>${listing.price}</p>
        `;

        listingGrid.appendChild(listingCard);
    });

    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const location = document.getElementById('location').value;
        const checkIn = document.getElementById('check-in').value;
        const checkOut = document.getElementById('check-out').value;
        const guests = document.getElementById('guests').value;

        alert(`Szukasz: ${location}, od ${checkIn} do ${checkOut} dla ${guests} gości.`);
        // Tutaj można dodać logikę wyszukiwania w bazie danych
    });
});