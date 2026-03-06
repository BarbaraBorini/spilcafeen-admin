import { useState, useEffect } from "react";
import GameList from "../components/GameList";
import Searchfield from "../components/Searchfield";
import gamedatabase from "../data/gamedatabase";
import GameCard from "../components/GameCard";

export default function DefaultPage() {

  // Load user plants from localStorage
  const [games, setGames] = useState(() => {
    const savedGames = localStorage.getItem("games");
    return savedGames ? JSON.parse(savedGames) : [];
  });

  // Search text
  const [filterText, setFilterText] = useState(() => {
    const savedFilter = localStorage.getItem("filterText");
    return savedFilter ? savedFilter : "";
  });

  // Filter
  const [levelFilter, setLevelFilter] = useState("");

  // Save search text
  useEffect(() => {
    localStorage.setItem("filterText", filterText);
  }, [filterText]);

  // Save plants
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  // Sort user plants alphabetically
  const sortedGames = [...games].sort((a, b) =>
    (a.title || "").localeCompare(
      b.title || "",
      "en",
      { sensitivity: "base" }
    )
  );

  // Filter USER plants
  const filteredGames = sortedGames.filter((game) =>
    (game.title || "")
      .toLowerCase()
      .includes(filterText.toLowerCase()) &&
    (categoryFilter === "" || game.category === categoryFilter)
  );


  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  };

  return (
    <>

     
     <section className="user-games">
  <h2>My Games</h2>

  {games.length === 0 ? (
    <p>No games added yet 🌱</p>
  ) : filteredGames.length === 0 ? (
    <p>No games match your filter 🔎</p>
  ) : (
    <GameList games={filteredGames} setGames={setGames} />
  )}
</section>
    </>
  );
}