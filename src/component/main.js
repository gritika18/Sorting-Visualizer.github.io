import React from "react";
import './navbar.css';
import LandingPage from "./landingPage";
import NavbarAll from "./navbar";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import MyNotes from "./pages/MyNotes";
import Sorting from "./Sorting";

const Main = ({handleLogout}) => {
    return (
            <Router>
            <NavbarAll handleLogout={handleLogout} />
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route exact path="/Bubble-sort" element={<Sorting algorithm={'Bubble Sort'}/>} />
                <Route exact path="/Insertion-sort" element={<Sorting algorithm={'Insertion Sort'}/>} />
                <Route exact path="/Merge-sort"element={<Sorting algorithm={'Merge Sort'}/>} />
                <Route exact path="/Quick-sort" element={<Sorting algorithm={'Quick Sort'}/>} />
                <Route exact path="/Selection-sort" element={<Sorting algorithm={'Selection Sort'}/>} />
                <Route exact path="/myNotes" element={<MyNotes />} />
            </Routes>
            </Router>
    );
};

export default Main;