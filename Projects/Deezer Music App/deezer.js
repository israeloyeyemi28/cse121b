async function searchLyrics() {
  const searchInput = document.getElementById("searchInput").value;
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  try {
    // Make API request to Genius
    const response = await fetch(
      `https://api.7digital/search?q=${encodeURIComponent(searchInput)}`,
      {
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
      }
    );
    const data = await response.json();

    // Display search results
    data.response.hits.forEach((hit) => {
      const songContainer = document.createElement("div");
      songContainer.classList.add("song");

      const title = document.createElement("h2");
      title.textContent = hit.result.title;
      songContainer.appendChild(title);

      const artist = document.createElement("p");
      artist.textContent = hit.result.primary_artist.name;
      songContainer.appendChild(artist);

      songContainer.addEventListener("click", () => {
        getLyrics(hit.result.id);
      });

      resultsContainer.appendChild(songContainer);
    });
  } catch (error) {
    console.error("Error fetching search results:", error);
  }
}

async function getLyrics(songId) {
  const resultsContainer = document.getElementById("results");

  try {
    // Make API request to Genius
    const response = await fetch(`https://api.genius.com/songs/${songId}`, {
      headers: {
        Authorization: "Bearer YOUR_ACCESS_TOKEN",
      },
    });
    const data = await response.json();

    // Display lyrics
    resultsContainer.innerHTML = `<pre>${data.response.song.lyrics}</pre>`;
  } catch (error) {
    console.error("Error fetching lyrics:", error);
  }
}
