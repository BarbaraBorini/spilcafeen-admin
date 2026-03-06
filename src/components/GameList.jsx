import GameItem from "./GameItem";

export default function GameList({ games, setGames }) {

  function deleteGameHandler(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (isConfirmed) {
      setGames(games.filter((game) => game.id !== id));
    }
  }

  return (
    <>
      {games.map((game) => (
        <GameItem
          key={game.id}
          game={game}
          deleteHandler={deleteGameHandler}
        />
      ))}
    </>
  );
}