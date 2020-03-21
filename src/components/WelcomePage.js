import React, {useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import CharacterList from "./CharacterList";
import Axios from "axios";

export default function WelcomePage() {
    const [ characters, setCharacters ] = useState([]);
    const [ filteredCharacters, setFilteredCharacters ] = useState([]);

    useEffect(() => {
        Axios
            .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
            .then((response) => {
                setCharacters(response.data.results);
            });

    }, []);

    function filterList(event) {
        const list = [];

        characters.map((character) => {
            event.map((name) => {
                if(character.name.toLowerCase().includes(name.toLowerCase())) {
                    list.push(character);
                    console.log(character);
                    console.log(list);
                }
            });
        });

        setFilteredCharacters(list);
    }

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>

        <SearchForm filterList={filterList} />
        <CharacterList characters={filteredCharacters.length > 0 ? filteredCharacters : characters} />
    </section>
  );
}
