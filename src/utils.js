import pokemonData from './data/pokemon.json'

Number.prototype.pad = function (n) {
    var str = '' + this;
    while (str.length < n) {
        str = '0' + str;
    }

    return str;
}
export function getPokemonData(id){
    for(let pokemon of pokemonData){
        if(pokemon.id === id){
            return pokemon
        }
    }
    return undefined;
}

