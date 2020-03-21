import React from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components'

const ResultsWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

export default function CharacterList(props) {
  if(props.characters) {
    return (
        <ResultsWrapper className="character-list">
          {props.characters.map((character) => {
            return (
                <div key={ character.id }>
                    <CharacterCard character={character}/>
                </div>
                );
          })}
        </ResultsWrapper>
    );
  } else {
      return (<h2>Search Characters</h2>);
  }
}
