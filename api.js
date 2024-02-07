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
    console.log(pokemonSprite);
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

// call tjhe fetch data function:

fetchData();
