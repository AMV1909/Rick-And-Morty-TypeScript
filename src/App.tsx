import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./Pages";

export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about/:id" element={<About />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </Router>
    );
}
