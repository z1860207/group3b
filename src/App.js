import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import { defaultLink } from "./constants";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    {/* Each Route needs Group3B/ to work on gh-pages, can change later if hosted elsewhere */}
                    {/* Route for Home Page */}
                    <Route path={defaultLink} element={[<Header />, <Home />]} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
