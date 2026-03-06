import { Link } from "react-router-dom";

export default function GameItem({ game, deleteHandler }) {
  return (
    <div className="game-card">
      <h3>{game.title}</h3>

      <p>
        <strong>Category:</strong> {game.category}
      </p>

      <p>
        <strong>Players:</strong> {game.players}
      </p>

      <p>
        <strong>Time:</strong> {game.time}
      </p>

      <div className="game-actions">
        <Link to={`/update/${game.id}`}>Edit game</Link>

        <button onClick={() => deleteHandler(game.id)}>
          Delete game
        </button>
      </div>
    </div>
  );
}