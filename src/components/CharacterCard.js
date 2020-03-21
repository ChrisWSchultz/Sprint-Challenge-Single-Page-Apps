import React from "react";

export default function CharacterCard(props) {git 
  return (
      <div>
        <h2>{ props.character.name }</h2>
        <p>{ props.character.status }</p>
        <img src={ props.character.image } />
      </div>
  );
}
