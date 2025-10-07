import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="app">
            <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
               bouton component
            </button>
        </div>
    );
}

export default App;
