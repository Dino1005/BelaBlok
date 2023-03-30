import React from 'react'
import Button from "./Button"
import "../styles/InGame.css"
import { useState, useEffect } from "react"

const InGame = ({ onExit, getPoints }) => {
  const [isIgraSelected, setIsIgraSelected] = useState(true)
  const [isMiSelected, setIsMiSelected] = useState(true)

  const [miPoints, setMiPoints] = useState("0")
  const [viPoints, setViPoints] = useState("0")

  const [miZvanje, setMiZvanje] = useState("0")
  const [viZvanje, setViZvanje] = useState("0")

  useEffect(() => {
    isMiSelected ? setViPoints(162 - miPoints) : setMiPoints(162 - viPoints)
  }, [isMiSelected, miPoints, viPoints]);


  const addPoints = (value) => {
    if (isMiSelected) {
      if (miPoints === "0")
        setMiPoints(value)
      else
        if (miPoints + value <= 162)
          setMiPoints(points => points + value)
    }
    else {
      if (viPoints === "0")
        setViPoints(value)
      else
        if (viPoints + value <= 162)
          setViPoints(points => points + value)
    }
  }

  const addZvanje = (value) => {
    if (isMiSelected) {
      if (miZvanje === "0")
        setMiZvanje(value)
      else
        if (miZvanje + value <= 1001)
          setMiZvanje(points => points + value)
    }
    else {
      if (viZvanje === "0")
        setViZvanje(value)
      else
        if (viZvanje + value <= 1001)
          setViZvanje(points => points + value)
    }

  }

  const removePoints = () => {
    if (isMiSelected) {
      if (miPoints !== "0") {
        if (isNaN(parseFloat(String(miPoints).slice(0, -1))))
          setMiPoints("0")
        else
          setMiPoints(String(miPoints).slice(0, -1))
      }
    }
    else {
      if (viPoints !== "0") {
        if (isNaN(parseFloat(String(viPoints).slice(0, -1))))
          setViPoints("0")
        else
          setViPoints(String(viPoints).slice(0, -1))
      }
    }
  }

  const removeZvanje = () => {
    if (isMiSelected) {
      if (miZvanje !== "0") {
        if (isNaN(parseFloat(String(miZvanje).slice(0, -1))))
          setMiZvanje("0")
        else
          setMiZvanje(String(miZvanje).slice(0, -1))
      }
    }
    else {
      if (viZvanje !== "0") {
        if (isNaN(parseFloat(String(viZvanje).slice(0, -1))))
          setViZvanje("0")
        else
          setViZvanje(String(viZvanje).slice(0, -1))
      }
    }
  }

  const reset = () => {
    setMiPoints("0");
    setViPoints("0");
    setMiZvanje("0");
    setViZvanje("0");
  }

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
              {parseInt(miPoints) + parseInt(miZvanje)}
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
              {parseInt(viPoints) + parseInt(viZvanje)}
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
        <div onClick={() => isIgraSelected ? addPoints("1") : addZvanje("1")}>1</div>
        <div onClick={() => isIgraSelected ? addPoints("2") : addZvanje("2")}>2</div>
        <div onClick={() => isIgraSelected ? addPoints("3") : addZvanje("3")}>3</div>
        <div onClick={() => isIgraSelected ? addPoints("4") : addZvanje("4")}>4</div>
        <div onClick={() => isIgraSelected ? addPoints("5") : addZvanje("5")}>5</div>
        <div onClick={() => isIgraSelected ? addPoints("6") : addZvanje("6")}>6</div>
        <div onClick={() => isIgraSelected ? addPoints("7") : addZvanje("7")}>7</div>
        <div onClick={() => isIgraSelected ? addPoints("8") : addZvanje("8")}>8</div>
        <div onClick={() => isIgraSelected ? addPoints("9") : addZvanje("9")}>9</div>
        <div onClick={reset}>{">"}</div>
        <div onClick={() => isIgraSelected ? addPoints("0") : addZvanje("0")}>0</div>
        <div onClick={() => isIgraSelected ? removePoints() : removeZvanje()}>{"<"}</div>
      </div>
      <div className="buttons">
        <Button
          text="<"
          onClick={onExit}
          buttonStyle="btn-red"
          buttonSize="btn-large"
        />
        <Button
          text="GOTOVO"
          onClick={() => getPoints(parseInt(miPoints) + parseInt(miZvanje), parseInt(viPoints) + parseInt(viZvanje))}
          buttonStyle="btn-green"
          buttonSize="btn-large"
        />
      </div>
    </div>
  )
}

export default InGame