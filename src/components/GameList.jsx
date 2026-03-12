import GameItem from "./GameItem";

export default function GameList({ games, setGames }) {

  function deleteGameHandler(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (isConfirmed) {
      setGames((prevGames) =>
        prevGames.filter((game) => game.id !== id)
      );
    }
  }

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameItem
          key={game.id}
          game={game}
          deleteHandler={deleteGameHandler}
        />
      ))}
    </div>
  );
}