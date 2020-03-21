import React from "react";
import styled from 'styled-components'

const CharCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #F8F8F8;
    margin: 1rem;
    padding: 2rem;
`

const CharImg = styled.img`
    border-radius: 100%;
`

export default function CharacterDetail(props) {
    let char = props.location.state.character;

  return (
      <CharCard>
          <h2>{ char.character.name }</h2>
          <p>Status: { char.character.status }</p>
          <p>Species: { char.character.species}</p>
          <CharImg src={ char.character.image } />
      </CharCard>
  );
}
