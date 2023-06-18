import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CharactersContext } from "../../Context/CharactersContext";
import { H1 } from "../../Components/H1/H1";

import "./About.css";

export function About() {
    const { id } = useParams();
    const { getCharacterById } = useContext(CharactersContext);
    const character: character | undefined = id
        ? getCharacterById(+id)
        : undefined;

    return (
        <main className="ram__about">
            <section>
                <H1 />

                {character ? (
                    <section>
                        <div className="ram__about-img">
                            <h1>{character.name}</h1>
                            <img src={character.image} alt={character.name} />
                        </div>

                        <div className="ram__about-info">
                            {Object.entries(character).map(
                                ([key, value]: [string, any]) => {
                                    if (
                                        key !== "id" &&
                                        key !== "name" &&
                                        key !== "image" &&
                                        key !== "type" &&
                                        key !== "url" &&
                                        key !== "created"
                                    ) {
                                        switch (key) {
                                            case "episode":
                                                return (
                                                    <div key={key}>
                                                        <p>
                                                            {key
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                key.slice(1)}
                                                            :
                                                        </p>

                                                        <div>
                                                            {character.episode
                                                                .length > 1 ? (
                                                                character.episode.map(
                                                                    (episode) =>
                                                                        episode
                                                                            .split(
                                                                                "/"
                                                                            )
                                                                            .pop() +
                                                                        ", "
                                                                )
                                                            ) : (
                                                                <p>
                                                                    {character.episode[0]
                                                                        .split(
                                                                            "/"
                                                                        )
                                                                        .pop()}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>
                                                );

                                            case "origin":
                                                return (
                                                    <div key={key}>
                                                        <p>
                                                            {key
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                key.slice(1)}
                                                            :
                                                        </p>
                                                        {value.name}
                                                    </div>
                                                );

                                            case "location":
                                                return (
                                                    <div key={key}>
                                                        <p>
                                                            {key
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                key.slice(1)}
                                                            :
                                                        </p>
                                                        {value.name}
                                                    </div>
                                                );

                                            default:
                                                return (
                                                    <div key={key}>
                                                        <p>
                                                            {key
                                                                .charAt(0)
                                                                .toUpperCase() +
                                                                key.slice(1)}
                                                            :
                                                        </p>
                                                        {value + ""}
                                                    </div>
                                                );
                                        }
                                    }
                                }
                            )}
                        </div>
                    </section>
                ) : (
                    <p>No results</p>
                )}
            </section>
        </main>
    );
}
