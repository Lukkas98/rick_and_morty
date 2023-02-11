import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Input = styled.input`
   padding: 4px;
   outline: 2px solid #0a0081;
   border: none;
   height: 35px;
   width: 250px;
   font-size: 17px;
   font-weight: 600;
   &:disabled{
      outline: 2px solid grey;
      padding: 2px;
   }
   &::placeholder{
      color:grey;
   }
`
const Button = styled.button`
   text-shadow: 2px 1px 2px #949494cc;
   border: 2px solid #000000;
   background-color: #f1af1b;
   color: #000000;
   padding: 8px;
   margin: 0 15px;
   font-size: 13px;
   font-weight: 800;
   transition: all 1s;

   &:hover{
      background-color: #f6c951;
      border: 2px solid white;
   }
`
const ButtonDisabled = styled.button`
   font-weight: 800;
   padding: 8px;
   margin: 0 15px;
   font-size: 13px;
   background-color: #ababaccf;
   color: #0e0e0ec7;
   text-shadow: none;
   border: none;
`

const DivContainer = styled.div`
   background-color: #337c6cc7;
   box-shadow: 0px 3px 4px 0 #000;
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-width: 90%;
   padding: 20px;
   border-radius: 5px;
`
const LinkNav = styled(NavLink)`
   margin: 0 20px;
   text-decoration: none;
   font-weight: bold;
   color: #f1af1b;
   text-shadow: 0px 3px 2px #252525;
   transition: all 1.5s;
   &:hover{
      text-shadow: 0px 1px 3px #ffaf1b;
      color: #252525;
   }
`

export default function SearchBar({onSearch, unLogin}) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
      setCharacter(e.target.value);
   }

   const { pathname } = useLocation();


   return (
      <DivContainer>
         <div>
            <LinkNav to={"/about"} >ABOUT ME</LinkNav>
            {
               pathname === "/favorites" ? (
                  <LinkNav to={"/"} >BACK HOME</LinkNav>
               ) : (
                  <LinkNav to={"/favorites"} >FAVORITES</LinkNav>
               )
            }
            <LinkNav to={"/login"} onClick={()=>{unLogin()}}>LOGOUT</LinkNav>
         </div>                                    
         <div> 
            {
               pathname === "/" ? (
                  <>
                     <Input type='search' onChange={handleChange} placeholder="Search with a number..."/>
                     <Button onClick={() => onSearch(character)} >Add</Button>
                  </>
               ) : (
                  <>
                     <Input placeholder="You can't search here..." disabled />
                     <ButtonDisabled disabled>Add</ButtonDisabled>
                  </>
               )
            }
         </div>
      </DivContainer>
   );
}
