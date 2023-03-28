import "./App.css"
import Button from "./components/Button"
import Score from "./components/Score"
import { useState } from "react"
import Games from "./components/Games"

function App() {
  const [miScore, setMiScore] = useState(0)
  const [viScore, setViScore] = useState(0)

  const [games, setGames] = useState([
    {
      id: 0,
      miPoints: 89,
      viPoints: 73,
    },
    {
      id: 1,
      miPoints: 0,
      viPoints: 312,
    },
    {
      id: 2,
      miPoints: 62,
      viPoints: 100,
    },
    {
      id: 3,
      miPoints: 89,
      viPoints: 73,
    },
    {
      id: 4,
      miPoints: 0,
      viPoints: 312,
    },
    {
      id: 5,
      miPoints: 62,
      viPoints: 100,
    },
  ])

  const showGame = () => {
    console.log("hi")
  }

  const setScore = () => {
    setMiScore(
      games.reduce((score, game) => {
        return score + game.miPoints
      }, 0)
    )

    setViScore(
      games.reduce((score, game) => {
        return score + game.viPoints
      }, 0)
    )
  }

  return (
    <div className="App">
      <div className="heading">
        <h2>BELA BLOK</h2>
      </div>
      <div className="games">
        <Games games={games} onClick={showGame} />
      </div>
      {/*Umjesto onClicka staviti da se updatea kada zavrsis jedan game*/}
      <div className="score">
        <div className="scr">
          <Score miScore={miScore} viScore={viScore} onClick={setScore} />
        </div>
        <Button
          text="NOVA IGRA"
          buttonStyle="btn-green"
          buttonSize="btn-large"
        />
      </div>
    </div>
  )
}

export default App
