import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { addCharacter, removeCharacter } from "../redux/actions";

const Image = styled.img`
   width: 200px;
   margin-top: 20px;
   border-radius: 55px;
   outline: 2px solid #000000;
   box-shadow: 0px 0px 15px 3px #01003a;
`

const DivImage = styled.div`
   font-variant: small-caps;
   margin-top: 40px;
   display: flex;
   position: relative;
   width: 250px;
   height: 345px;
   outline: 1px solid #000000;
   background-color: rgb(81 72 155);
   box-shadow: -5px 4px 7px 0px #000000;
   align-items: center;
   flex-direction: column;
   transition: all 1s;
   &:hover{
      background-color: rgb(59 161 139);
      outline: 2px solid #ffffff;
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
   position: relative;
   bottom: 53px;
   max-width: 195px;
   
   &:hover{
      animation: round 0.5s ease-in-out;
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
   position: absolute;
   bottom: 3px;
   font-size: 19px;
   text-shadow: 1px 0 3px white;
`
const Gender = styled.h2`
   position: absolute;
   top: 241px;
   font-size: 21px;
   text-shadow: 1px 0 3px white;
}
`
const Button = styled.button`
   color: white;
   border: #1e1919 1px solid;
   border-radius: 5px;
   padding: 3px 8px;
   background-color: #c90d0d;
   margin-top: 10px;
   position: relative;
   left: 100px;
`
const ButtonFav = styled(Button)`
   left: 11px;
   position: absolute;
   background-color: #fff0;
   border: none;
   font-size: 20px;
`



export default function Card({ onClose, name, species, gender, image, id}) {
   const [isFav, setIsFav] = useState(false); 

   const myFavorites = useSelector(state => state.myFavorites);

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
   }, [myFavorites]);

   return (
      <DivImage>
         {
            isFav ? (
               <ButtonFav onClick={handleFavorite}>❤️</ButtonFav>
            ) : (
               <ButtonFav onClick={handleFavorite}>🤍</ButtonFav>
            )
         }
         <Button onClick={onClose}>X</Button>
         <Image  src={image} alt={name} />
         <Name to={`/detail/${id}`} >{name}</Name>
         <Species>{species} </Species>
         <Gender>{gender} </Gender>
      </DivImage>
   );
}

/* const mapStateToProps = (state)=>{
   return{
      myFavorites: state.myFavorites
   }
} */


/* const mapDispatchToProps = (dispatch)=>{
   return{
      addFavorite: (character)=>{
         dispatch(addCharacter(character))
      },
      removeFavorite: (id)=>{
         dispatch(removeCharacter(id))
      }
   }
} */

// export default connect(mapStateToProps, mapDispatchToProps)(Card);
