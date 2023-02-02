import styled from "styled-components";
import Card from "./Card";

const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  column-gap: 25px;
  margin: 20px 40px;
`


export default function Cards({characters, onClose}) {
  return (
    <DivFlex>
      {characters.map((character) => {
        return (
          <Card
            id={character.id}
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={()=> onClose(character.id)}
          />
        );
      })}
    </DivFlex>
  );
}
