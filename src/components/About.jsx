import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Myphoto from "./assets/myImage.jpg"
import rick from "./assets/Rick.svg"
import morty from "./assets/Morty.svg"

//animacion
const animationRick = keyframes`
  0% {
    top: 0px;
  }
  50% { 
    transform: rotate(35deg);
    top: 270px;
  }
  100% {
    top: 0px;
  }
`
const animationMorty = keyframes`
  0% {
    top: 270px;
  }
  50% { 
    transform: rotate(-35deg);
    top: 0px;
  }
  100% {
    top: 270px;
  }
`
const ChangeColor = keyframes`
    0%{
    background-color: #5b78d4c2;
    }
    25%{
        background-color: #324984cf;
    }
    50%{
        background-color: #5b78d4cf;
    }
    75%{
        background-color: #5957a4cf;
    }
    100%{
        background-color: #5b78d4cf;
    }
`

const DivNav = styled.div`
    display: flex;
    background-color: #228f8fe0;
    box-shadow: 0px 4px 6px 0 black;
    border: 1px solid black;
    padding: 8px;
    margin: 60px;
    align-items: center;
    justify-content: center;
`
const DivContainer = styled.div`
    margin: 80px 30px;
    display: flex;
    justify-content: space-evenly;
`
const DivImage = styled.div`
    animation: ${ChangeColor} 10s ease-in-out infinite;
    transition: all 1.5s;
    border: 2px solid black;
    background-color: #5b78d4c2;
    box-shadow: 4px 4px 6px 0 black;
    border-radius: 90px;
    width: 430px;
    height: 355px;
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: center;
    transform: perspective(600px) rotateX(-10deg);
`
const MyImage = styled.img`
    border: 2px solid white;
    border-radius: 100px;
    width: 250px;
`

const ImgRick = styled.img`
    animation: ${animationRick} 4s infinite;
    position: relative;
    width: 100px;
    height: 100px;
`
const ImgMorty = styled(ImgRick)`
    animation: ${animationMorty} 4s infinite;
`


const DivFinal = styled.div`
    animation: ${ChangeColor} 10s ease-in-out infinite;
    transition: all 1.5s;
    transform: perspective(800px) rotateX(10deg);
    border: 1px solid black;
    box-shadow: 0px 3px 6px 0 black;
    margin: 85px;
    background-color: #5b78d4c2;
    display: flex;
    flex-direction: column;
    text-align: center;
    font-variant: small-caps;
    align-items: center;
`
const LinkNav = styled(NavLink)`
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
const ContainerP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TagP = styled.p`
    width: 70%;
    color: #0300c5;
    text-shadow: 2px 1px 4px #d1d1d1;
    font-size: 20px;
    font-weight: 500;
    padding: 15px;
    background-color: #f0af1b5c;
    border-radius: 45px;
`


export default function About(){
    return(
        <div>
            <DivNav>
                <h2>Lucas Martín Palma</h2>
            </DivNav>
            <DivContainer>
                <ImgRick src={rick} alt="rick"  />
                <DivImage>
                    <span style={{paddingBottom: "30px" ,fontSize: "40px"}} >¡HOLA!</span>
                    <MyImage src={Myphoto} alt="My Photo" /> {/* {mi foto} */}
                </DivImage>
                <ImgMorty src={morty} alt="morty" />
            </DivContainer>
            <DivFinal>
                <ContainerP>
                    <TagP>Acerca de mi</TagP>
                    <TagP>Me llamo Lucas tengo 24 años, soy Estudiante de Henry, siempre me encantó todo lo relacionado a la tecnologia, me recibí de una escuela técnica como maestro mayor de obras "si ya lo sé, nada tiene que ver con esto", esta es mi primera pagina de Frontend los animo a probar y espero les guste tanto como a mi hacerla.
                    </TagP>
                    <LinkNav to={"/"} >Back to Home</LinkNav>  
                </ContainerP>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div> 
            </DivFinal>      
        </div>

    )
}