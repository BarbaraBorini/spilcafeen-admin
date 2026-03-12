import { Link } from "react-router-dom";

export default function GameItem({ game, deleteHandler }) {
  return (
    <div className="game-card">

      {/* Category tags */}
      <div className="category-tags">
        {game.category.map((cat) => (
          <span key={cat} className="category-tag">
            {cat}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3>{game.title}</h3>

      {/* Game details */}
      <div className="game-info">
        <p>
          <strong>Players:</strong> {game.players}
        </p>

        <p>
          <strong>Time:</strong> {game.time}
        </p>
      </div>

      {/* Actions */}
      <div className="game-actions">
        <Link className="edit-btn" to={`/update/${game.id}`}>
          Edit
        </Link>

        <button
          className="delete-btn"
          onClick={() => deleteHandler(game.id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
} 