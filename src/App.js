import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Favourites from "./Favourite";
import "./index.css";

const studentsList = ["Bharath", "Praveen", "Kumar", "Ramya", "Monica"];

const App = () => {
  const [students, setStudents] = useState(studentsList);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addToFavorites = (student) => {
    setFavorites([...favorites, student]);
    setStudents(students.filter((s) => s !== student));
  };

  const removeFromFavorites = (student) => {
    setStudents([...students, student]);
    setFavorites(favorites.filter((s) => s !== student));
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Router>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <Routes>
          <Route path="/" element={<Home students={students} addToFavorites={addToFavorites} />} />
          <Route path="/favourites" element={<Favourites favorites={favorites} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
