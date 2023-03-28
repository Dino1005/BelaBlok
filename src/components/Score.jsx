import React from 'react'
import "../styles/Score.css"

const Score = ({ miScore, viScore, onClick }) => {

  return (
    <div className="container" onClick={onClick}>
      <div>
        MI
        <p className="count">0</p>
      </div>
      <p className="points">{miScore}</p>
      <p className="count">1001</p>
      <p className="points">{viScore}</p>
      <div>
        VI
        <p className="count">0</p>
      </div>
    </div>
  )
}

export default Score