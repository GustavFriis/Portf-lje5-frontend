console.log("test")
fetch('https://cafe-api-jcky.onrender.com/cafes')
    .then(response => response.json())
    .then(function (cafes) {
       renderCafes(cafes)
        console.log(cafes)
    });

function renderCafes(cafes) {
    const ul = document.querySelector('ul.cafes')
    cafes.forEach(cafes => {
        const li = document.createElement('li')
        li.innerHTML = `
        <p>${cafes.CafeName}</p>
        <p>${cafes.Cozy}</p>
        <p>${cafes.PriceRange}</p>
        <p>${cafes.Wifi}</p>
        <p>${cafes.Postcode}</p>
        <p>${cafes.Address}</p>
        <p>${cafes.Size}</p>
        `;
        ul.appendChild(li);
    });
}