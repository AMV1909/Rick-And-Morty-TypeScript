import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./Pages";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/Rick-And-Morty-TypeScript" element={<Home />} />
                <Route path="/Rick-And-Morty-TypeScript/about/:id" element={<About />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
}
