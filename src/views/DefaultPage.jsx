import { useState, useEffect } from "react";
import GameList from "../components/GameList";

export default function DefaultPage() {

  const [games, setGames] = useState(() => {
  const savedGames = localStorage.getItem("games");
  return savedGames ? JSON.parse(savedGames) : gamedatabase;
});

  const [filterText, setFilterText] = useState("");

  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const sortedGames = [...games].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const filteredGames = sortedGames.filter((game) =>
    game.title.toLowerCase().includes(filterText.toLowerCase()) &&
    (categoryFilter === "" || game.category === categoryFilter)
  );

  return (
    <>
      <section className="user-games">
        <h2>My Games</h2>

        {games.length === 0 ? (
          <p>No games added yet</p>
        ) : filteredGames.length === 0 ? (
          <p>No games match your filter 🔎</p>
        ) : (
          <GameList games={filteredGames} setGames={setGames} />
        )}
      </section>
    </>
  );
}