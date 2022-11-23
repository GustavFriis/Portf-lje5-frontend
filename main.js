let cafesGlobal;

fetch('https://cafe-api-jcky.onrender.com/cafes')
    .then(response => response.json())
    .then(function (cafes) {
       renderCafes(cafes)
        console.log(cafes)
        cafesGlobal = cafes
    });

function renderCafes(cafes) {
    const ul = document.querySelector('ul.cafes')
    ul.innerHTML = '';
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

function getCozyValue(cafes){
    const selectedCozyValue = document.getElementById("cozy").value;
    console.log(selectedCozyValue)
    // vi skal have ændred værdierne i render til at sige cozyLow, cozyMedium og cozyHigh, og lavet loW omtil low i render
    const filteredCozyFilter = cafesGlobal.filter(cozy => cozy.Cozy === selectedCozyValue)
    console.log(filteredCozyFilter)
    renderCafes(filteredCozyFilter)
    }


function getPriceValue(cafes){
    const selectedPriceValue = document.getElementById("price").value;
    console.log(selectedPriceValue)
    // vi skal have ændred værdierne i render til at sige priceLow, priceMedium og priceHigh
    const filteredPriceFilter = cafesGlobal.filter(price => price.PriceRange === selectedPriceValue)
    console.log(filteredPriceFilter)
    renderCafes(filteredPriceFilter)
}