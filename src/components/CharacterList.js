import React from "react";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components'
import {Link} from "react-router-dom";

const ResultsWrapper = styled.section`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`

export default function CharacterList(props) {
    return (
        <ResultsWrapper className="character-list">
          {props.characters.map((character) => {
            return (
                <div key={ character.id }>
                    <Link to={{ pathname: `/character/${character.id}`, state: {character: {character}} }}>
                        <CharacterCard character={character}/>
                    </Link>
                </div>
                );
          })}
        </ResultsWrapper>
    );
}
