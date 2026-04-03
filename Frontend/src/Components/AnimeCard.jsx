import React from "react";
import "./AnimeCard.css";

const AnimeCard = ({ anime }) => {
  return (
    <div className="anime-card">
      <img src={anime.images.jpg.image_url} alt={anime.title} />

      <div className="anime-info">
        <h3>{anime.title}</h3>
        <p>⭐ {anime.score || "N/A"}</p>
      </div>
    </div>
  );
};

export default AnimeCard;