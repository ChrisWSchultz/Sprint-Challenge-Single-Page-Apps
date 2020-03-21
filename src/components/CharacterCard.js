import React from "react";
import styled from 'styled-components'

const CharCard = styled.div`
    display: border-box;
    background-color: #F8F8F8;
    margin: 1rem;
    padding: 2rem;
`

const CharImg = styled.img`
    border-radius: 100%;
`

export default function CharacterCard(props) {
  return (
      <CharCard>
          <h2>{ props.character.name }</h2>
          <p>Status: { props.character.status }</p>
          <p>Species: { props.character.species}</p>
          <CharImg src={ props.character.image } />
      </CharCard>
  );
}
