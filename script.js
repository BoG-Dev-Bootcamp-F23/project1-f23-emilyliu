let pokemonID = 1

async function getPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonID.toString())
        const data = await response.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

getPokemon()