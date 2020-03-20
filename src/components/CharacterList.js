import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then((response) => {
          setCharacters(response.data.results);
        });

  }, []);

  return (
    <section className="character-list">
        {characters.map((character) => {
            return (
                <h2 key={ character.id }>{ character.name }</h2>
            );
        })}
    </section>
  );
}
