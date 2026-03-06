export default function GameCard({ game }) {
  return (
    <div className="game-card">
      <h3>{game.title}</h3>

      <p><strong>Category:</strong> {game.category}</p>
      <p><strong>Players:</strong> {game.players}</p>
      <p><strong>Time:</strong> {game.time}</p>
    </div>
  );
}