import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameList from "../components/GameList";
import Searchfield from "../components/Searchfield";

export default function AddGame() {

  const [games, setGames] = useState(() => {
    const savedGames = localStorage.getItem("games");
    return savedGames ? JSON.parse(savedGames) : [];
  });

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("");
  const [time, setTime] = useState("");

  const [filterText, setFilterText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  function createHandler(e) {
    e.preventDefault();

    const highestId =
      games.length > 0
        ? Math.max(...games.map((game) => game.id))
        : -1;

    const newGame = {
      id: highestId + 1,
      title,
      category,
      players,
      time,
    };

    setGames((prev) => [...prev, newGame]);

    navigate("/");
  }

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(filterText.toLowerCase()) &&
    (categoryFilter === "" || game.category === categoryFilter)
  );

  return (
    <>
      <form onSubmit={createHandler}>
        <h2>Add a game</h2>

        <div>
          <label>Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
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

        <div>
          <label>Players:</label>
          <input
            type="text"
            required
            value={players}
            onChange={(e) => setPlayers(e.target.value)}
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="text"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button type="submit">Add Game</button>
      </form>

      <section className="user-games">
        <h2>My Games Database</h2>

        <div className="filters">
          <Searchfield
            handleInput={(e) => setFilterText(e.target.value)}
            filter={filterText}
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