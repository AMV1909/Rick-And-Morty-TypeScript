import "./H1.css";

export function H1() {
    return (
        <h1
            className="ram__h1"
            onClick={() =>
                (window.location.href = "/Rick-And-Morty-TypeScript")
            }
        >
            Rick & Morty
        </h1>
    );
}
