import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import AnimeCard from "../Components/AnimeCard";
import "./Home.css";

const Home = () => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/anime")
      .then((res) => res.json())
      .then((data) => setAnimeList(data.data));
  }, []);

  return (
    <div className="home">
      <Navbar />

      <h2 className="home-title">Trending Anime</h2>

      <div className="anime-container">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;