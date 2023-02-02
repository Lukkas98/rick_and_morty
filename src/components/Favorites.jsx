import { useSelector } from "react-redux";
import styled from "styled-components";

const DivImage = styled.div`
   font-variant: small-caps;
   margin: 40px 20px;
   display: flex;
   width: 250px;
   height: 400px;
   outline: 1px solid rgb(59 161 139);
   background-color: rgb(81 72 155);
   box-shadow: -5px 4px 7px 0px rgb(59 161 139);
   align-items: center;
   flex-direction: column;
   transition: all 2s;
   &:hover{
        background-color: rgb(59 161 139);
        box-shadow: -5px 4px 7px 0px rgb(81 72 155);
        outline: 2px solid rgb(81 72 155);
   }
`
const Image = styled.img`
   width: 200px;
   margin-top: 20px;
   border-radius: 55px;
   outline: 2px solid #000000;
   box-shadow: 0px 0px 15px 3px #01003a;
   transition: all 2s;
   &:hover{
        transform: scale(1.1);
        outline: 2px solid rgb(81 72 155);
   }
`
const Name = styled.h2`
    font-variant: small-caps;
    background-color: #08118336;
    padding: 3px 10px;
    font-size: 17px;
    font-weight: 700;
    color: #ffca27;
    text-shadow: 1px 1px 2px #000000;
    width: 190px;
    text-align: center;
}
`

const Species = styled.h2`
    margin-top: 10px;
    font-size: 19px;
    text-shadow: 1px 0 3px white;
`
const Gender = styled.h2`
    margin: 8px;
    font-size: 21px;
    text-shadow: 1px 0 3px white;
}
`
const DivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    flex-direction: row;
`



export function Favorites() {
    const myFavorites = useSelector ( state => state.myFavorites); 
    return (

      <DivContainer >
        {myFavorites.map(character => {
            return(
                <DivImage key={character.id}>
                    <Name>{character.name}</Name>
                    <Image src={character.image} alt="foto" />
                    <Species>{character.species}</Species>
                    <Gender>{character.gender}</Gender>
                </DivImage>
            )
        })      
      }
    </DivContainer>
    )
}
