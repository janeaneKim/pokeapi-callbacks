
let button = document.getElementById("submit");
if(button){
    button.addEventListener("click", makeArray);
}


function makeArray(event){
    let pokemonId = document.getElementById("pokemonNumber").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then(result => result.json())
    .then((data) => {
        if (pokemonId <= 500 && pokemonId >= 1){
        document.getElementById("result").innerHTML= `
        <h2>Your number returns:</h2>
        <div id="pokemonResult">
            <img id="pokemonImage" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            <div class="empty"></div>
                <span id="pokemonName">${data.name}</span>
        </div>
        `
        } else{
        document.getElementById("result").innerHTML= `
        <h2>Your number is not valid :( Try again!</h2>`
        }
    })
    .catch((error)=> {console.log("some error", error);
    });

    event.preventDefault();
}


// if (pokemonId <= 500 && pokemonId >= 1){
//     document.getElementById("result").innerHTML= `
//     <h2>Your number returns:</h2>
//     <div id="pokemonResult">
//         <img id="pokemonImage" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
//         <div class="empty"></div>
//             <span id="pokemonName">${data.name}</span>
//     </div>
//     `
// } else{
//     document.getElementById("result").innerTML= `
//     <h2>Your number is not valid :( Try again!</h2>`
// }