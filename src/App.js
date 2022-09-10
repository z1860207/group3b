import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path="/" element={[<Header />, <Home />]} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
