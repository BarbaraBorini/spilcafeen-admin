import { useState, useEffect } from "react";
import GameList from "../components/GameList";
import gamedatabase from "../data/gamedatabase";

export default function DefaultPage() {

 const [games, setGames] = useState(() => {
  const savedGames = JSON.parse(localStorage.getItem("games")) || [];
  return [...gamedatabase, ...savedGames];
});

  const [filterText, setFilterText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(filterText.toLowerCase()) &&
    (categoryFilter === "" || game.category === categoryFilter)
  );

  return (
    <section className="user-games">

      <h2>Game Library</h2>

      {/* Filters */}

      <div className="filters">

        <input
          type="search"
          placeholder="Search games..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All categories</option>
          <option value="Strategy">Strategy</option>
          <option value="Family">Family</option>
          <option value="Party">Party</option>
          <option value="Dice">Dice</option>
          <option value="Abstract">Abstract</option>
          <option value="Card game">Card game</option>
          <option value="Word game">Word game</option>
          <option value="Classic">Classic</option>
          <option value="Children">Children</option>
          <option value="Cooperative">Cooperative</option>
          <option value="Storytelling">Storytelling</option>
        </select>

      </div>

      {filteredGames.length === 0 ? (
        <p>No games match your filter 🔎</p>
      ) : (
        <GameList games={filteredGames} setGames={setGames} />
      )}

    </section>
  );
}