// HTTPS STATUS CODES:
//  1.  INFORMATIONAL RESPONSES (100 - 199)
// 2.  SUCCESS "" (200 - 299)
// // 3. redirection "" (300 - 399)
// client error "" ( 400 - 499)
// server error responses (500 - 599)

// USING THEN METHOD

//   .then((response) => {
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     if (!response.ok) {
//       throw new Error("COULDNT FETCH RESOURCE");
//     }

//     return response.json();
//   })
//   .then((data) => console.log(data.id))
//   .catch((error) => console.error(error));

// USING ASYNCS

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("COULDNT FETCH RESOURCE");
    }

    const data = await response.json();
    console.log(data);
    const pokemonSprite = data.sprites.front_default;

    const pokemonFront = data.sprites.front_shiny;
    console.log(pokemonFront);
    console.log(pokemonSprite);
    const imgElement = document.getElementById("pokemonSprite");
    const secondImg = document.getElementById("pokemonFront");
    const pokemonHeight = data.height;
    const pokemonWeight = data.weight;
    const pokemonAbilities = data.abilities.map(
      (ability) => ability.ability.name
    );

    const pokemonTypes = data.types.map((type) => type.type.name).join(", ");

    const pokemonLocation = data.location_area_encounters.lenght;

    const pokemonExperience = data.base_experience;

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    secondImg.src = pokemonFront;
    secondImg.style.display = "block";
    const responseParagraph = document.createElement("h3");
    responseParagraph.innerText = `INFORMATION: 
    ${pokemonName} is an iconic pokemon character known for its speed and cute appearance. 
    It belongs to the ${pokemonTypes} and it weighs ${pokemonWeight}, its height is ${pokemonHeight} inches. 
    Abilities: ${pokemonAbilities}. 
    ${pokemonName} is often found in ${pokemonLocation} different habitats. 
    It is known to have a ${pokemonExperience}% base experience value and a catch rate of ${pokemonExperience}`;
    document.body.appendChild(responseParagraph);
  } catch (error) {
    console.error(error);
  }
}

// call tjhe fetch data function:

fetchData();
