import { useContext } from "react";

import { CharactersContext } from "../../Context/CharactersContext";
import { Character, Navbar } from "../../Components";

import "./CharactersList.css";

export function CharactersList() {
    const { characters, loading } = useContext(CharactersContext);

    return (
        <section className="ram__charactersList">
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
