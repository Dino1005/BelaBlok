import Game from "./Game"

const Games = ({ games, onClick }) => {

  return (
    <>
      {games.map((game) => (
        <Game key={game.id} game={game} onClick={onClick}></Game>
      ))}
    </>
  )
}

export default Games