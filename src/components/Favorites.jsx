import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterCards, orderCards } from "../redux/actions";

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
        transform: scale(1.2);
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
    position: relative;
    top: 15px;
    font-size: 21px;
    text-shadow: 1px 0 3px white;
`
const Gender = styled.h2`
    font-size: 21px;
    text-shadow: 1px 0 3px white;
}
`
const DivContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 90%;
`
const DivFavorites = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Select = styled.select`
    padding: 5px;
    font-size: 15px;
    margin: 3px 10px;
    background-color: lightgray;
    &:focus-visible {
        background-color: lightgray;
    }
`
const OptGroup = styled.optgroup`
    border-radius: 30px;
  background-color: lightgray;
  font-size: 14px;
  padding: 10px;
`;
const Option = styled.option`
    width: 200px;
    color: #ff5722;
    padding: 8px;
    font-weight: 600;
    font-size: 14px;
    margin: 9px 2px;
    border-top: 1px solid black;
`


export function Favorites() {
    const myFavorites = useSelector ( state => state.myFavorites); 
    const dispatch = useDispatch()

    useEffect(()=> { dispatch(filterCards("All")) } , [dispatch])
    
    function order(e){
        dispatch(orderCards(e.target.value))
    }
    function filter(e){
        dispatch(filterCards(e.target.value))
    }

    return (
        <DivFavorites>
            <div>
                <Select onChange={order} >
                    <OptGroup label="Order by ID" >
                        <Option value="Ascendente">Ascendente</Option>
                        <Option value="Descendente">Descendente</Option> 
                    </OptGroup>
                </Select>
                <Select onChange={filter} >
                    <Option value="All">All</Option>
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                    <Option value="Genderless">Genderless</Option>
                    <Option value="unknown">unknown</Option>
                </Select>
            </div>
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
        </DivFavorites>
    )
}
