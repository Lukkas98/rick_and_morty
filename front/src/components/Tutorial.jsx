import React, { useState } from "react";
import styled from "styled-components";

const DivTutorial = styled.div`
    position: absolute;
    top: 10px;
    z-index: 101;
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;


export default function Tutorial(){

    const [ showTutorial, setShowtutorial ] = useState(true)

    function change(){
        setShowtutorial(false)
    }

    return(
        <>
        {showTutorial && 
        <>
            <Overlay />
            <DivTutorial>
                <p style={{backgroundColor:"green"}} >Hola soy Toturial</p>
                <button onClick={change} >OK</button>
            </DivTutorial>
        </>   

        }
        </>
    )
}