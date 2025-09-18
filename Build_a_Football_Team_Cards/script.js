// 1. Create the footballTeam object
const footballTeam = {
  team: "Argentina",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    { name: "Diego Maradona", position: "midfielder", isCaptain: true },
    { name: "Jorge Valdano", position: "forward", isCaptain: false },
    { name: "Oscar Ruggeri", position: "defender", isCaptain: false },
    { name: "Nery Pumpido", position: "goalkeeper", isCaptain: false },
  ],
};

// 2. Display coach, team, and year
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

// 3. Function to display players
const playerCardsContainer = document.getElementById("player-cards");

function displayPlayers(position = "all") {
  // Clear previous cards
  playerCardsContainer.innerHTML = "";

  // Filter players by position
  const filteredPlayers = footballTeam.players.filter((player) => {
    return position === "all" ? true : player.position === position;
  });

  //Generate player cards
  filteredPlayers.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const nameEl = document.createElement("h2");
    nameEl.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const posEl = document.createElement("p");
    posEl.textContent = `Position: ${player.position}`;

    card.appendChild(nameEl);
    card.appendChild(posEl);

    playerCardsContainer.appendChild(card);
  });
}

// 4. Initial display
displayPlayers();

// 5. Dropdown event listener
document.getElementById("players").addEventListener("change", function () {
  displayPlayers(this.value);
});
