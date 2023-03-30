import "./App.css"
import Button from "./components/Button"
import Score from "./components/Score"
import { useState, useEffect } from "react"
import Games from "./components/Games"
import InGame from "./components/InGame"

function App() {
  const [miScore, setMiScore] = useState(0)
  const [viScore, setViScore] = useState(0)

  const [showMainPage, setShowMainPage] = useState(true)

  const [games, setGames] = useState([])

  useEffect(() => {
    setScore()
  })

  const setScore = () => {
    setMiScore(
      games.reduce((score, game) => {
        return score + parseInt(game.miPoints)
      }, 0)
    )

    setViScore(
      games.reduce((score, game) => {
        return score + parseInt(game.viPoints)
      }, 0)
    )
  }

  const showGame = (id) => {
    setShowMainPage(false)
    //prikazati postojeci game prema id-u
  }

  const onExit = () => {
    setShowMainPage(true)
  }

  const addGame = (mi, vi) => {
    //dodati nacin za updateanje postojeceg game-a
    setShowMainPage(true)
    const id = Math.floor(Math.random() * 10000) + 1 //temporary random id
    const game = {
      id: id,
      miPoints: mi,
      viPoints: vi,
    }
    setGames([...games, game])
  }

  return (
    <>
      {showMainPage && (
        <div className="App">
          <div className="heading">
            <h2>BELA BLOK</h2>
          </div>
          <div className="games">
            <Games games={games} showGame={showGame} />
          </div>
          <div className="score">
            <div className="scr">
              <Score miScore={miScore} viScore={viScore} />
            </div>
            <Button
              text="NOVA IGRA"
              onClick={showGame}
              buttonStyle="btn-green"
              buttonSize="btn-large"
            />
          </div>
        </div>
      )}
      {!showMainPage && <InGame onExit={onExit} getPoints={addGame} />}
    </>
  )
}

export default App
