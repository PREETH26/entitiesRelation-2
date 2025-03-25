import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starValue) => {
    setRating(starValue);
  };

  const handleStarHover = (starValue) => {
    setHoveredRating(starValue);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }
    onRatingSubmit(productId, rating);
    setRating(0); 
  };

  return (
    <div style={styles.widget}>
      <div style={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              ...styles.star,
              color: (hoveredRating || rating) >= star ? "#FFD700" : "#ccc",
            }}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={handleStarLeave}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} style={styles.button}>
        Submit Rating
      </button>
    </div>
  );
};

const styles = {
  widget: {
    marginTop: "10px",
  },
  stars: {
    display: "flex",
    justifyContent: "center",
    fontSize: "24px",
    cursor: "pointer",
  },
  star: {
    margin: "0 5px",
    transition: "color 0.2s ease-in-out",
  },
  button: {
    marginTop: "10px",
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default RatingWidget;
