let cafesGlobal;

fetch('https://cafe-api-jcky.onrender.com/cafes')
    .then(response => response.json())
    .then(function (cafes) {
       renderCafes(cafes)
        console.log(cafes)
        cafesGlobal = cafes
        filterList(cafes)
    });

function renderCafes(cafes) {
    const ul = document.querySelector('ul.cafes')
    ul.innerHTML = '';
    cafes.forEach(cafes => {
        const li = document.createElement('li')
        li.innerHTML = `
        <p>${cafes.CafeName}</p>
        <p>Cozy: ${cafes.Cozy}</p>
        <p>Price: ${cafes.PriceRange}</p>
        <p>Wifi:${cafes.Wifi}</p>
        <p>Postnummer: ${cafes.Postcode}</p>
        <p>Addresse: ${cafes.Address}</p>
        <p>størrelse: ${cafes.Size}m2</p>
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
    debugger;
    const selectedPriceValue = document.getElementById("price").value;
    console.log(selectedPriceValue)
    // vi skal have ændred værdierne i render til at sige priceLow, priceMedium og priceHigh
    const filteredPriceFilter = cafesGlobal.filter(price => price.PriceRange === selectedPriceValue)
    console.log(filteredPriceFilter)
    renderCafes(filteredPriceFilter)
}



function filterList (cafes) {
    console.log(cafes)
    const textInput = document.querySelector('input#searchBarID');
    textInput.addEventListener("input", function () {
        console.log(textInput)
        const inputValue = textInput.value
        console.log(inputValue)
        const filteredCafes = [];
        for (let i = 0; i < cafesGlobal.length; i++) {
            const newCafe = cafesGlobal[i]
            console.log(newCafe.CafeName)
            if (newCafe.CafeName.toLowerCase().includes(inputValue)){
                filteredCafes.push(newCafe)
            }
        }
        renderCafes(filteredCafes)
        console.log(filteredCafes)
    })
}




let addCafeModal = document.querySelector('#addCafeModal')
