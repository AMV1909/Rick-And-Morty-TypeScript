import { useContext } from "react";

import { CharactersContext } from "../../Context/CharactersContext";
import { Character } from "../Character/Character";
import { Navbar } from "../Navbar/Navbar";

import "./CharacterList.css";

export function CharacterList() {
    const { characters, loading } = useContext(CharactersContext);

    return (
        <section className="ram__characterList">
            <Navbar />

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : characters && characters.length > 0 ? (
                    characters.map((character) => (
                        <Character key={character.id} character={character} />
                    ))
                ) : (
                    <p>No results</p>
                )}
            </div>
        </section>
    );
}
