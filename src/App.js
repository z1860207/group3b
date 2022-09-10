import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    {/* Route to redirect "/" to "/home" */}
                    <Route path="/" element={<Navigate to="/home" />} />
                    {/* Route for Home Page */}
                    <Route path="/home" element={[<Header />, <Home />]} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
