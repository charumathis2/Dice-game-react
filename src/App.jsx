import StartGame from "./components/StartGame";
import styled from "styled-components";
import GamePlay from "./components/GamePlay";
import React, { useState } from "react";
function App() {


  const [isGameStarted, setIsGameStarted]=useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)

  }
    return (
    <> 
    {/* executes as javascript inside these brackets */}
    {

      isGameStarted ? <GamePlay/> : <StartGame  
      toggle={toggleGamePlay}
      />
    }
    
    </>
  )
}

export default App

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px;
  `;

