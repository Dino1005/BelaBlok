import "../styles/Game.css"

const Game = ({ game, onClick }) => {
  return (
    <div className="game" onClick={onClick}>
      <p>{game.miPoints}</p>
      <p>{game.viPoints}</p>
    </div>
  )
}

export default Game