import Game from "./Game"

const Games = ({ games, showGame }) => {

  return (
    <>
      {games.map((game) => (
        <Game key={game.id} game={game} onClick={() => showGame(game.id)}></Game>
      ))}
    </>
  )
}

export default Games