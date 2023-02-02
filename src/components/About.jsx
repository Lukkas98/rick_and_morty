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

/* const DivAbout = styled.div`
    background-color: bisque;
    height: 100vh;
` */
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
    border: 2px solid black;
    background-color: #5ca1cad4;
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
    transform: perspective(800px) rotateX(10deg);
    border: 1px solid black;
    box-shadow: 0px 3px 6px 0 black;
    margin: 85px;
    background-color: #5ea3d0cf;
    color: #ffc252;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 9px;
    font-size: 18px;
    font-variant: small-caps;
    text-shadow: 1px 2px 3px black;
`
const LinkNav = styled(NavLink)`
    position: relative;
    right: 40px;
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



export default function About(){
    return(
        <div>
            <DivNav>
                <LinkNav to={"/"} >Back to Home</LinkNav>  
                <h2>Lucas Martín Palma</h2>
            </DivNav>
            <DivContainer>
                <ImgRick src={rick} alt="rick"  />
                <DivImage>
                    <span style={{paddingBottom: "30px" ,fontSize: "40px"}} >¡HI!</span>
                    <MyImage src={Myphoto} alt="My Photo" /> {/* {mi foto} */}
                </DivImage>
                <ImgMorty src={morty} alt="morty" />
            </DivContainer>
            <DivFinal>
                <div>
                    <p>About me</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, illum, aut sed culpa omnis molestiae, illo exercitationem voluptatem laudantium dolores blanditiis. Vero animi eos quibusdam velit corporis dolorem unde rem.</p>
                </div>
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