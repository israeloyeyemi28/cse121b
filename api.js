// HTTPS STATUS CODES:
//  1.  INFORMATIONAL RESPONSES (100 - 199)
// 2.  SUCCESS "" (200 - 299)
// // 3. redirection "" (300 - 399)
// client error "" ( 400 - 499)
// server error responses (500 - 599)

// USING THEN METHOD

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("COULDNT FETCH RESOURS");
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
    console.log(pokemonFront)
    console.log(pokemonSprite);
    const imgElement = document.getElementById("pokemonSprite");
    const secondImg = document.getElementById("secondImg");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";

    secondImg.src = pokemonFront;
    secondImg.style.display = "block";

    const pokemonHeight = data.height;
    const pokemonWeight = data.weight;
    const responseParagraph = document.createElement("p");
    responseParagraph.innerText = ` ${pokemonName} is a pokemon that weighs ${pokemonWeight} and its height is ${pokemonHeight}`;
    document.body.appendChild(responseParagraph);
  } catch (error) {
    console.error(error);
  }
}

// call tjhe fetch data function:

fetchData();
