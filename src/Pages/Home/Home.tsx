import { CharactersList } from "../../Components";
import { H1 } from "../../Components/H1/H1";

import "./Home.css";

export function Home() {
    return (
        <main className="ram__home">
            <section>
                <H1 />
                <CharactersList />
            </section>
        </main>
    );
}
