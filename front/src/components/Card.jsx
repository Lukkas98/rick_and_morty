import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { addCharacter, removeCharacter } from "../redux/actions";

const Image = styled.img`
   width: 200px;
   border-radius: 55px;
   outline: 2px solid #000000;
   box-shadow: 0px 0px 15px 3px #01003a;
   @media (max-width: 900px) {
      width: 170px;
   }
`

const DivImage = styled.div`
   font-variant: small-caps;
   display: flex;
   gap: 18px;
   position: relative;
   width: 250px;
   height: fit-content;
   outline: 1px solid #000000;
   background-color: rgb(81 72 155);
   box-shadow: -5px 4px 7px 0px #000000;
   align-items: center;
   flex-direction: column;
   transition: all 1.4s;
   &:hover{
      background-color: rgb(59 161 139);
      outline: 2px solid #ffffff;
   }
   @media (max-width: 900px) {
      width: 200px;
   }
`

const Name = styled(NavLink)`
   font-variant: small-caps;
   background-color: #505050b5;
   font-family: cursive;
   padding: 4px 3px;
   display: block;
   text-decoration: none;
   font-size: 17px;
   font-weight: 700;
   color: #ffca27;
   text-shadow: 1px 1px 2px #000000;
   position: absolute;
   top: 206px;
   max-width: 195px;
   
   &:hover{
      animation: round 0.5s ease-in-out;
   }
   @media (max-width: 900px) {
      top: 173px;
   }
   
  @keyframes round {
    0%{
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(15deg);
    }
    66%{
      transform: rotate(-15deg);
    }
    100{
      transform: rotate(0deg)
    }
`
const Species = styled.h2`
   margin: 0;
   font-size: 19px;
   text-shadow: 1px 0 3px white;
`
const Gender = styled.h2`
   margin: 0;
   margin-bottom: 15px;
   font-size: 21px;
   text-shadow: 1px 0 3px white;
}
`
const ID = styled.span`
   font-size: 18px;
   text-shadow: 1px 0 3px white;
   font-weight: 700;
`

const Button = styled.button`
   color: white;
   border: #1e1919 1px solid;
   border-radius: 5px;
   padding: 3px 8px;
   background-color: #c90d0d;
`
const ButtonFav = styled(Button)`
   background-color: #fff0;
   border: none;
   font-size: 20px;
   
`
const DivSupCard = styled.div`
   display: flex;
   align-items: center;
   min-width: 90%;
   justify-content: space-between;
   margin: 3px 0;
`


export default function Card({ onClose, name, species, gender, image, id}) {
   const [isFav, setIsFav] = useState(false); 

   const myFavorites = useSelector(state => state.allCharacters);

   const dispatch = useDispatch();


   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false)
         dispatch(removeCharacter(id));
      }else{
         setIsFav(true)
         let props = { name, species, gender, image, id}
         dispatch(addCharacter(props));
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   return (
      <DivImage>
         <DivSupCard>
            {
               isFav ? (
                  <ButtonFav onClick={handleFavorite}>❤️</ButtonFav>
               ) : (
                  <ButtonFav onClick={handleFavorite}>🤍</ButtonFav>
               )
            }
            <ID>ID: {id}</ID>
            <Button onClick={onClose}>X</Button>
         </DivSupCard>
         <Image  src={image} alt={name} />
         <Name to={`/detail/${id}`} >{name}</Name>
         <Species>{species} </Species>
         <Gender>{gender} </Gender>
      </DivImage>
   );
}