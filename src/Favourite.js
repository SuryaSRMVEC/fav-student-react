import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Favourites = ({ favorites, removeFromFavorites }) => {
    return (
      <div className="container">
        <h2>Favourite Students</h2>
        {favorites.length > 0 ? (
          favorites.map((student, index) => (
            <div key={index} className="student-item">
              {index + 1}. {student}
              <button className="remove-button" onClick={() => removeFromFavorites(student)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No favourites added</p>
        )}
        <Link className="link" to="/">Back to Home</Link>
      </div>
    );
  };
  
  export default Favourites;
