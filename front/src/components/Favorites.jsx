import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { filterCards, getFavorites, orderCards } from "../redux/actions";

const DivImage = styled.div`
    gap: 25px;
   font-variant: small-caps;
   margin: 40px 20px;
   display: flex;
   width: 250px;
   height: fit-content;
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
    background-color: #0811835e;
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
    margin: 0;
    font-size: 21px;
    text-shadow: 1px 0 3px white;
`
const Gender = styled.h2`
    margin: 0;
    margin-bottom: 15px;
    font-size: 21px;
    text-shadow: 1px 0 3px white;
}
`
const DivContainer = styled.div`
    height: fit-content;
    gap: 20px;
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
const ContentSelect = styled.div`
    min-width: 200px;
	position: relative;
`

const Select = styled.select`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::-ms-expand {
        display: none;
      }
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 7px 10px;
    height: 40px;
    outline: 0;
    background: #d6d6d6;
    font-size: 17px;
    font-weight: 600;
    color: #272727;
    font-family: 'Quicksand',sans-serif;
    border: 2px solid rgba(0,0,0,0.2);
    border-radius: 12px;
    position: relative;
    transition: all 0.25s ease;
    &:hover{
        background: #B1E8CD;
    }
`
const Arrow = styled.i`
    position: absolute;
    right: 20px;
    top: calc(60% - 13px);
    width: 13px;
    height: 13px;
    display: block;
    border-left: 2px solid #2AC176;
    border-bottom: 2px solid #2AC176;
    transform: rotate(-45deg);
    transition: all 0.25s ease;
` 

const Option = styled.option`
    color: #0114ba;
    font-weight: 700;
    font-size: 17px;
`


export function Favorites() {
    const myFavorites = useSelector ( state => state.myFavorites); 
    const dispatch = useDispatch()

    useEffect(()=> { 
        dispatch(getFavorites())
        dispatch(filterCards("All"))
        dispatch(orderCards("Ascendente"))
    } , [dispatch])
    
    function order(e){
        dispatch(orderCards(e.target.value))
    }
    function filter(e){
        dispatch(filterCards(e.target.value))
    }

    return (
        <DivFavorites>
            <div style={{ display:"flex", gap:"30px" }} >
                <ContentSelect>
                    <Select onChange={order} >
                        <Option value="Ascendente">Ascendente</Option>
                        <Option value="Descendente">Descendente</Option>  
                    </Select>
                    <Arrow />
                </ContentSelect>
                <ContentSelect>
                    <Select onChange={filter} >
                        <Option value="All">All</Option>
                        <Option value="Male">Male</Option>
                        <Option value="Female">Female</Option>
                        <Option value="Genderless">Genderless</Option>
                        <Option value="unknown">unknown</Option>
                    </Select>
                    <Arrow />
                </ContentSelect>
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
