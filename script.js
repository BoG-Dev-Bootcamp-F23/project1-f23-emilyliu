let pokemonID = 2

function addTypeTab(type) {
    const map = {
        "normal": "#A8A77A",
        "fire": "#EE8130",
        "water": "#6390F0",
        "electric": "#F7D02C",
        "grass": "#7AC74C",
        "ice": "#96D9D6",
        "fighting": "#C22E28",
        "poison": "#A33EA1",
        "ground": "#E2BF65",
        "flying": "#A98FF3",
        "psychic": "#F95587",
        "bug": "#A6B91A",
        "rock": "#B6A136",
        "ghost": "#735797",
        "dragon": "#6F35FC",
        "dark": "#705746",
        "steel": "#B7B7CE",
        "fairy": "#D685AD"
    }
    console.log(type)
    const typeContainer = document.getElementById("type-container")
    const typeDiv = document.createElement("div")
    typeDiv.textContent = type
    typeDiv.style.backgroundColor = map[type]
    typeContainer.appendChild(typeDiv)
}

function displayData(data) {
    const pokemonName = document.getElementById("pokemon-name")
    pokemonName.textContent = data.name
    const types = data.types
    const img = document.getElementById("poke-img")
    img.src = data.sprites.front_default
    types.forEach(type => addTypeTab(type.type.name))
}

async function getPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonID.toString())
        const data = await response.json()
        displayData(data)
    } catch (err) {
        console.log(err)
    }
}



getPokemon()