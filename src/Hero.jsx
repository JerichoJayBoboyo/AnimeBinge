import "./styles/index.css";
import "./styles/hero.css";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function Hero() {
  const [animeData, setAnimeData] = useState(null); // Initialize with null
  const [activeButton, setActiveButton] = useState(null);
  const [activeBullet, setActiveBullet] = useState(1);
  const [animeList, setAnimeList] = useState([]); // State to store the list of anime

  // Fetch the JSON data when the component mounts
  useEffect(() => {
    fetch("/anime-list.json")
      .then((response) => response.json())
      .then((data) => {
        setAnimeList(data); // Set the list of anime
        setAnimeData(data[0]); // Initialize state with the first anime's data
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Function to handle button click
  function handleButtonClick(buttonId) {
    setActiveButton(buttonId);
  }

  // Function to handle bullet click
  function handleBulletClick(bulletId) {
    const bulletNum = bulletId - 1; // Adjust for zero-based index
    if (animeList[bulletNum]) {
      setActiveBullet(bulletId); // Update bullet ID for active state
      setAnimeData(animeList[bulletNum]); // Update anime data based on bullet
    }
  }

  // Log background image path for debugging
  useEffect(() => {
    if (animeData) {
      console.log("Background image path:", animeData.img);
    }
  }, [animeData]);

  if (!animeData) {
    return <div>Loading...</div>; // Optional: show a loading state while data is being fetched
  }

  return (
    <section className="hero-section">
      <div className="hero-main-cntr">
        <div className="img-cntr">
          <img src={animeData.img} alt="Anime background" />
        </div>
        <div className="overview-cntr">
          <span className="anime-title">{animeData.name}</span>
          <div className="cat-and-rate-cntr">
            <span className="rate">
              <i className="fa-solid fa-star"></i>
              <span className="ratings">{`${animeData.ratings}.0`}</span>
            </span>
            <span className="category">{`Category: ${animeData.category.join(
              ", "
            )}`}</span>
          </div>
          <span className="anime-desc">{animeData.description}</span>
          <div className="btn-cntr">
            <button className="watch-now">
              <i className="fa-solid fa-play"></i> Watch now!
            </button>
            <button className="heart-react">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
        <div className="btn-selection-cntr">
          <div className="anime-btns-cntr">
            <button
              className={`overview-btn ${
                activeButton === "overview" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("overview")}
            >
              Overview
            </button>
            <button
              className={`episodes-btn ${
                activeButton === "episodes" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("episodes")}
            >
              Episodes
            </button>
            <button
              className={`details-btn ${
                activeButton === "details" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("details")}
            >
              Details
            </button>
          </div>
          <div className="bullet-btns-cntr">
            {animeList.map((_, index) => (
              <button
                key={index + 1}
                className={`bullet-btn ${
                  activeBullet === index + 1 ? "active" : ""
                }`}
                onClick={() => handleBulletClick(index + 1)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
