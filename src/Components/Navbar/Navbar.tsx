import { ChangeEvent, useContext, useState } from "react";
import { CharactersContext } from "../../Context/CharactersContext";
import "./Navbar.css";

export function Navbar() {
    const { page, setPage, maxPage, searchCharacters, goTo } =
        useContext(CharactersContext);
    const [inputValue, setInputValue] = useState<number>(1);

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInputValue(+e.target.value);
    };

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setPage(inputValue);
    };

    return (
        <nav className="ram__navbar">
            <section className="ram__navbar-search">
                <label htmlFor="search">Search:</label>
                <input
                    type="text"
                    id="search"
                    onChange={(e) => searchCharacters(e.target.value)}
                />
            </section>

            {goTo && (
                <section className="ram__navbar-goTo">
                    {page === 1 ? (
                        <p>Page: {page}</p>
                    ) : (
                        <button onClick={() => setPage(page - 1)}>
                            Page {page - 1}
                        </button>
                    )}

                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            min="1"
                            max={maxPage}
                            onChange={onChange}
                        />
                    </form>

                    {page === maxPage ? (
                        <p>Page: {page}</p>
                    ) : (
                        <button onClick={() => setPage(page + 1)}>
                            Page {page + 1}
                        </button>
                    )}
                </section>
            )}
        </nav>
    );
}
