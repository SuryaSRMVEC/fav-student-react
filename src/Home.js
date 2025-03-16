import React from "react";
import { Link } from "react-router-dom";
import "./index.css";


const Home = ({ students, addToFavorites }) => {
    return (
      <div className="container">
        <h2>List of Students</h2>
        {students.map((student, index) => (
          <div key={index} className="student-item">
            {index + 1}. {student}
            <button className="favorite-button" onClick={() => addToFavorites(student)}>
              Add to Favourite
            </button>
          </div>
        ))}
        <Link className="link" to="/favourites">Go to Favourites</Link>
      </div>
    );
  };
  
  export default Home;
