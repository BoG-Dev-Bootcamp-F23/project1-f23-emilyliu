let pokemonID = 2
let infoDisplay = true

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
    const typeContainer = document.getElementById("type-container")
    const typeDiv = document.createElement("span")
    typeDiv.classList.add("type-span")
    typeDiv.textContent = type
    typeDiv.style.backgroundColor = map[type]
    typeContainer.appendChild(typeDiv)
}

function addInfoData(infoData) {
    const informationContainer = document.getElementById("information-container")
    informationContainer.innerHTML = "height: " + (infoData["height"]/10.0).toString() + "m" 
     + "<br /> weight: " + (infoData["weight"]/10.0).toString() + "kg"
     + "<br /> hp: " + infoData["hp"]
     + "<br /> attack: " + infoData["attack"]
     + "<br /> defense: " + infoData["defense"]
     + "<br /> special-attack: " + infoData["special-attack"]
     + "<br /> special-defense: " + infoData["special-defense"]
     + "<br /> speed: " + infoData["speed"]
}

function addMovesData(movesData) {
    const informationContainer = document.getElementById("information-container")
    informationContainer.innerHTML = ''
    movesData.forEach(move =>  informationContainer.innerHTML += move.move.name + "<br />")
}

function handleInfoMoveLogic(selector, infoData, moves, infoButton, movesButton) {
    const rightHeader = document.getElementById("right-header")
    if (selector === true) {
        rightHeader.textContent = "Info"
        addInfoData(infoData)
        movesButton.style.backgroundColor = "#e8e8e8"
        infoButton.style.backgroundColor = "#7cff79"
    } else {
        rightHeader.textContent = "Moves"
        addMovesData(moves)
        infoButton.style.backgroundColor = "#e8e8e8"
        movesButton.style.backgroundColor = "#7cff79"
    }
}

function displayData(data) {
    const pokemonName = document.getElementById("pokemon-name")
    pokemonName.textContent = data.name
    const types = data.types
    const img = document.getElementById("poke-img")
    img.src = data.sprites.front_default
    types.forEach(type => addTypeTab(type.type.name))

    // height, weight, hp, attack, defense, special-attack, special-defense, speed
    const infoData = {
        "height": data.height,
        "weight": data.weight,
        "hp": data.stats[0].base_stat,
        "attack": data.stats[1].base_stat,
        "defense": data.stats[2].base_stat,
        "special-attack": data.stats[3].base_stat,
        "special-defense": data.stats[4].base_stat,
        "speed": data.stats[5].base_stat
    }
    const moves = [...data.moves]

    const infoButton = document.getElementById("info-button")
    const movesButton = document.getElementById("moves-button")

    infoButton.addEventListener("click", (e) => {
        infoDisplay = true
        handleInfoMoveLogic(infoDisplay, infoData, moves, infoButton, movesButton)
    })
    movesButton.addEventListener("click", (e) => {
        infoDisplay = false
        handleInfoMoveLogic(infoDisplay, infoData, moves, infoButton, movesButton)
    })

    handleInfoMoveLogic(infoDisplay, infoData, moves, infoButton, movesButton)
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