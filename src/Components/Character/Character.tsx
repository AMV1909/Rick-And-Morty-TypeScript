import { useNavigate } from "react-router-dom";
import "./Character.css";

export function Character({
    character: { id, name, image },
}: {
    character: character;
}) {
    const navigate = useNavigate();

    return (
        <section className="ram__character">
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                onClick={() => navigate(`/Rick-And-Morty-TypeScript/about/${id}`)}
            />
        </section>
    );
}
