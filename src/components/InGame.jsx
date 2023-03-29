import React from 'react'
import Button from "./Button"
import "../styles/InGame.css"
import { useEffect, useState } from "react"

const InGame = () => {

  const [isIgraSelected, setIsIgraSelected] = useState()
  const [isMiSelected, setIsMiSelected] = useState()

  useEffect(() => {
    setIsIgraSelected(true)
  }, [])

  useEffect(() => {
    setIsMiSelected(true)
  }, [])


  return (
    <div className="in-game">
      <div className="points">
        <div className="top">
          <div className={`point ${isMiSelected ? "pressed" : ""}`} onClick={() => setIsMiSelected(isMiSelected ? isMiSelected : !isMiSelected)}>
            <div className="side">
              <div className="title">MI</div>
              <div className="num">58</div>
              <div className="num">1</div>
              <div className="num">868</div>
            </div>
            <div className="main_scr">
              58
            </div>
          </div>
          <div className={`point ${!isMiSelected ? "pressed" : ""}`} onClick={() => setIsMiSelected(!isMiSelected ? isMiSelected : !isMiSelected)}>
            <div className="side">
              <div className="title">VI</div>
              <div className="num">58</div>
              <div className="num">1</div>
              <div className="num">868</div>
            </div>
            <div className="main_scr">
              104
            </div>
          </div>
        </div>

        <div className="bot">
          <Button
            text="IGRA"
            onClick={() => setIsIgraSelected(isIgraSelected ? isIgraSelected : !isIgraSelected)}
            buttonStyle={`btn-white ${isIgraSelected ? "pressed" : ""}`}
            buttonSize="btn-large"
          />
          <Button
            text="ZVANJE"
            onClick={() => setIsIgraSelected(!isIgraSelected ? isIgraSelected : !isIgraSelected)}
            buttonStyle={`btn-white ${!isIgraSelected ? "pressed" : ""}`}
            buttonSize="btn-large"
          />
        </div>
      </div>
      <div className="inputs">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>{">"}</div>
        <div>0</div>
        <div>{"<"}</div>
      </div>
      <div className="buttons">
        <Button
          text="<"
          buttonStyle="btn-red"
          buttonSize="btn-large"
        />
        <Button
          text="GOTOVO"
          buttonStyle="btn-green"
          buttonSize="btn-large"
        />
      </div>
    </div>
  )
}

export default InGame