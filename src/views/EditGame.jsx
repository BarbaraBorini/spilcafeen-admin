import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Load plants from localStorage
  const [pgames, setGames] = useState(() => {
    const savedGames = localStorage.getItem("games");
    return savedGames ? JSON.parse(savedGames) : [];
  });

  // Find the plant to edit
  const game = games.find((p) => p.id === Number(id));

  // Form state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [players, setPlayers] = useState("");
  const [time, setTime] = useState("");

  // Save plants whenever updated
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  // Fill form when plant is found
  useEffect(() => {
    if (game) {
      setTitle(game.title || "");
      setCategory(game.category || "");
      setPlayers(game.players || "");
      setTime(game.time || "");
    }
  }, [game]);

  // Update plant
  function updateHandler(e) {
    e.preventDefault();

    const updatedGame = {
      id: Number(id),
      title,
      category,
      players,
      time,
    };

    setGames(
      games.map((p) =>
        p.id === Number(id) ? updatedGame : p
      )
    );

    navigate("/");
  }

  return (
    <form onSubmit={updateHandler}>
      <h2>Edit Game</h2>

      <div>
        <label>ID:</label>
        <input type="number" value={id} readOnly />
      </div>

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
          <option value="">Select category</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div>
        <label>Players:</label>
        <input
          type="text"
          required
          value={light}
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

      <button type="submit">Update Game</button>
    </form>
  );
}