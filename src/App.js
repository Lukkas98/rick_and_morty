import styled from "styled-components";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import About from "./components/About";
import {  Routes , Route, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail";
import Cards from "./components/Cards";
import Form from "./components/Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { Favorites } from "./components/Favorites";
import { removeCharacter } from "./redux/actions";

import imageBack from "./components/assets/633221.jpg"
import imageAbout from "./components/assets/fractal.png"
import CustomAlert from "./components/CustomAlert";

const DivFlex = styled(Routes)`
  display: flex;
  justify-content: space-evenly;
`

function App() {
  const { pathname } = useLocation();
  
  const body = document.querySelector('body');
  if (pathname !== "/about") {
    body.style.backgroundImage = `url(${imageBack})`
  }else{
    body.style.backgroundImage = `url(${imageAbout})`;
  }
  //efectos de pantalla y fondos
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    body.style.backgroundPosition = `${x * -0.05}px ${y * -0.05}px`;
  });


  const [ characters, setCharacters] = useState([]);

  //estado para la alerta custom
  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertText, setAlertText ] = useState(null)

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          if (!characters.find(character => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            setShowAlert(true);
            setAlertText("This character already exists");
          }
        } else {
          setShowAlert(true);
          setAlertText("There are no characters with that ID");
        }
    });
  }
  

  const myFavorites = useSelector(state => state.myFavorites);

  const dispatch = useDispatch();

  function onClose(id){
    setCharacters(characters.filter( character => character.id !== id));
    myFavorites.forEach( character => {
      if (character.id === id) dispatch(removeCharacter(id));
    });
  }

  //validacion falsa de seguridad
  const username = "lucas@gmail.com";
  const password = "1password";
  const navigate = useNavigate();
  const [ access, setAccess ] = useState(false);

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/');
    }
    else if(userData.username !== username && userData.password === password){
      setAlertText("Incorrect Username");
      setShowAlert(true);
    }
    else if( userData.password !== password && userData.username === username ){
      setAlertText("Incorrect Password");
      setShowAlert(true);
    }
    else{
      setAlertText("Incorrect information");
      setShowAlert(true);
    }
  }
  //para que no se pueda navegar si la informacion no es correcta
  useEffect(() => {
    !access && navigate('/login');
  }, [access, navigate]);
  //------------------------------------------------------------
  function unLogin(){setAccess(false)};
  

  return (
    <>
      { pathname !== "/login" && pathname !== "/about" && <Nav onSearch={onSearch} unLogin={unLogin} /> }
      { showAlert && <CustomAlert text={alertText} showAlert={setShowAlert} /> }
      <DivFlex>

        <Route path="/login" element={ <Form login={login}  /> }/>

        <Route path="/" element={ <Cards onClose={onClose} characters={characters}/>}/>
        
        <Route path="/detail/:id" element={ <Detail /> } />

        <Route path="/favorites" element={ <Favorites/> } />

        <Route path="/about" element={ <About/> } /> 
      </DivFlex>
    </>
  );
}

export default App;