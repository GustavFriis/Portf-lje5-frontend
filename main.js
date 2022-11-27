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
        <p class="cafeTitle">${cafes.CafeName}</p>
        <p>Cozy: ${cafes.Cozy}</p>
        <p>Price: ${cafes.PriceRange}</p>
        <p>Wifi:${cafes.Wifi}</p>
        <p>Postnummer: ${cafes.Postcode}</p>
        <p>Addresse: ${cafes.Address}</p>
        <p>Størrelse: ${cafes.Size}m2</p>
        `;
        ul.appendChild(li);
    });
}

function getCozyValue(cafes) {

    const selectedCozyValue = document.getElementById("cozy").value;
    console.log(selectedCozyValue)
    const filteredCozyFilter = cafesGlobal.filter(cozy => cozy.Cozy === selectedCozyValue)
    console.log(filteredCozyFilter)
    renderCafes(filteredCozyFilter)
}


function getPriceValue(cafes) {
    debugger;
    const selectedPriceValue = document.getElementById("price").value;
    console.log(selectedPriceValue)
    const filteredPriceFilter = cafesGlobal.filter(price => price.PriceRange === selectedPriceValue)
    console.log(filteredPriceFilter)
    renderCafes(filteredPriceFilter)
}


function filterList(cafes) {
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
            if (newCafe.CafeName.toLowerCase().includes(inputValue)) {
                filteredCafes.push(newCafe)
            }
        }
        renderCafes(filteredCafes)
        console.log(filteredCafes)
    })
}

//
function addCafe(event) {
    event.preventDefault()
    const cafe = {
        CafeName: event.target.CafeName.value,
        Cozy: event.target.Cozy.value,
        PriceRange: event.target.PriceRange.value,
        Wifi: event.target.Wifi.value,
        Postcode: event.target.Postcode.value,
        Address: event.target.Address.value,
        Size: event.target.Size.value
    };
    console.log(cafe)
    console.log(JSON.stringify(cafe))

    fetch('https://cafe-api-jcky.onrender.com/cafes/', {
        method: 'POST',
        body: JSON.stringify(cafe),
        headers: {
            "Content-Type": "application/json",
        },

    })
        .then((response) => response.json())
        .then(function (Success) {
            console.log(Success)
        })
}


let addCafeModal = document.querySelector('#addCafeModal')
let addCafeBttn = document.querySelector('.addCafeBttn')
let span = document.querySelector('.close')

addCafeModal.style.display = "none";
addCafeBttn.onclick = function () {
    addCafeModal.style.display = "block";
}

span.onclick = function () {
    addCafeModal.style.display = "none";
}

