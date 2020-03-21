import React from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
  if(props.characters) {
    return (
        <section className="character-list">
          {props.characters.map((character) => {
            return (
                <div key={ character.id }>
                    <CharacterCard character={character}/>
                </div>
                );
          })}
        </section>
    );
  } else {
      return (<h2>Search Characters</h2>);
  }
}
