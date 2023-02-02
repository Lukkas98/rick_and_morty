import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"; 
import styled, { keyframes } from "styled-components";

const sideRigth = keyframes`
  from {
    transform: perspective(800px) rotateY(90deg);
  }
  to {
    transform: perspective(800px) rotateY(0deg);
  }
`
const animationImg = keyframes`
  from{
    transform: scale(0.1) rotate(0deg);
  }
  to{
    transform: scale(1.0) rotate(360deg);
  }

`

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`
const DivContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  min-width: 70%;
  background-color: #4274c9eb;
  border: 2px solid white;
  border-top-left-radius: 65px;
  border-bottom-right-radius: 65px;
  padding: 20px;
  justify-content: space-evenly;
`


const PDetail = styled.p`
  animation: ${sideRigth} 2s ease-in;
  font-size: 20px;
  font-weight: bold;
  padding: 7px;
  color: #ffaf1b;
  text-shadow: 2px 2px 3px #000000;
  margin: 22px 15px;
`
const DivImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Img = styled.img`
  animation: ${animationImg} 2s ease-in;
  width: 250px;
  border-radius: 75px;
  margin: 30px 80px;
  outline: 1px solid #020202;
  box-shadow: 2px 5px 5px 0 black;
`
const Button = styled(NavLink)`
  font-size: 20px;
  text-decoration: none;
  font-weight: bold;
  color: #ffaf1b;
  text-shadow: -1px 2px 5px #000000;
  transition: all 1.5s;
  &:hover{
    text-shadow: -1px 2px 5px #ffaf1b;
    color: #000000;
  }
`



export default function Detail(){
    const { id } = useParams();

    const [character , setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("There are no characters with that ID");
            }
          })
          .catch(() => {
            window.alert("There are no characters with that ID");
          });
        return setCharacter({});
    }, [id]);


    return(
        <DivFlex>
          <DivContainer>
            <div >
              <PDetail>{character.name ? "Nombre: " + character.name : ''} </PDetail>
              <PDetail>{character.status ? "Status: " + character.status : ''}</PDetail>
              <PDetail>{character.species ? "Specie: " +  character.species : "Specie: Don't have specie"}</PDetail>
              <PDetail>{character.gender ? "Gender: " + character.gender : "Gender: Don't have gender"}</PDetail>
              <PDetail>{character.origin ? `Origin: ${character.origin.name} ` : `Origin: Don't have origin`}</PDetail>
            </div>
            <DivImage>
              <Img src={character.image} alt={character.name} />
              <Button to={"/"}>Back</Button>
            </DivImage>
          </DivContainer>
        </DivFlex>
    )
}
