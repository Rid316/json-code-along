/** @TODO - Access the pokemon data from data.js */
/**         and print to the console to check */

/** @TODO - Update the page data using a single pokemon */
/**
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the
 *          pokemon's base stats
 */

let randPokemon = pokemon[parseInt(Math.random() * pokemonArr.length)];

let nameHeading = document.querySelector("#poke_name");
nameHeading.innerHTML = `${randPokemon.id} - ${randPokemon.name}`;

let pokeImg = document.querySelector("#poke_img");
pokeImg.src = randPokemon.image[0];

let pokeTypes = document.querySelector("#poke_types");
pokeTypes.innerHTML = `${randPokemon.type[0]}/${randPokemon.type[1]} type`;

let statDivs = document.querySelectorAll("#poke_stats div");
for (let i = 0; i < statDivs.length; i++) {
  let stat = statDivs[i].id;
  statDivs[i].style["width"] = `${randPokemon.base[stat] * 4}px`;
}

/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 *
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */

let randomBtn = document.querySelector("#random_btn");
randomBtn.addEventListener("click", pickRandomStarter);
randomBtn.onClick = function () {};
