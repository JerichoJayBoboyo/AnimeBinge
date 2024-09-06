import "./styles/index.css";
import "./styles/animelist.css";
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

function AnimeList() {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/anime-list.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSelectedAnime = (id) => {
    const anime = data.find((anime) => anime.id === id);
    setSelectedAnime(anime);
  };

  const filteredData = data.filter((_, index) => [2, 4, 5].includes(index));

  return (
    <section className="anime-list-section">
      <div className="anime-list-main-cntr">
        {selectedAnime === null && (
          <div className="trending-cntr">
            <span className="list-title">
              Trending <span className="gold-txt">this week!</span>
            </span>
            <div className="this-week-anime-main-cntr">
              <div className="cntr-wrapper">
                {data.map((anime) => (
                  <div
                    className="this-week-anime-cntr"
                    id={`anime-number-${anime.id}`}
                    key={anime.id}
                    onClick={() => handleSelectedAnime(anime.id)}
                  >
                    <div className="anime-img-cntr">
                      <img src={anime.img} alt={anime.name} />
                    </div>
                    <div className="trending-anime-details">
                      <div className="cat-and-title">
                        <span className="animetitle">{anime.name}</span>
                        <span className="animecategory">
                          {`Category: ${anime.category.join(", ")}`}
                        </span>
                      </div>
                      <span className="rates">
                        <i className="fa-solid fa-star star"></i>
                        {`${anime.ratings}.0`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Render throwback-cntr if selectedAnime is null */}
        {selectedAnime === null && (
          <div className="throwback-cntr">
            <span className="list-title">
              Throwback <span className="gold-txt">Anime!</span>
            </span>
            <div className="throwback-anime-main-cntr">
              {filteredData.map((anime) => (
                <div className="throwback-anime-cntr" key={anime.id}>
                  <img src={anime.img} alt={anime.name} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render if selectedAnime is true */}
        {selectedAnime && (
          <div className="anime-watch-cntr">
            <span className="list-title">
              Trending <span className="gold-txt">this week!</span>
            </span>
            <div className="anime-to-watch-cntr">
              <div className="anime-to-watch-now">
                <div className="anime-wall-cntr">
                  <div className="anime-wall-img-cntr">
                    <img src={selectedAnime.img} alt={selectedAnime.name} />
                  </div>
                  <div className="anime-to-watch-details trending-anime-details">
                    <div className="to-watch-details cat-and-title">
                      <span className="animetitle">{selectedAnime.name}</span>
                      <span className="animecategory">
                        {`Category: ${selectedAnime.category.join(", ")}`}
                      </span>
                    </div>
                    <span className="rates">
                      <i className="fa-solid fa-star star"></i>
                      {`${selectedAnime.ratings}.0`}
                    </span>
                  </div>
                </div>
                <span className="anime-brief-overview">
                  {selectedAnime.description}
                </span>
              </div>

              <div className="anime-to-watch-episode">
                <div className="episode-season-cntr">
                  <span>Episodes</span>
                  <span>Seasons 1</span>
                </div>
                <div className="episodes-main-cntr">
                  <div className="episode-cntr">
                    <div className="episode-img-cntr">
                      <img src="../public/ep1-img1.png" alt="" />
                    </div>
                    <div className="episode-number-summary">
                      <span className="episode-num">Episode 1</span>
                      <span className="episode-summary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate quidem dolorem, voluptatem doloribus
                        nulla fugiat tempore doloremque.
                      </span>
                    </div>
                  </div>
                  <div className="episode-cntr">
                    <div className="episode-img-cntr">
                      <img src="../public/ep2-img1.png" alt="" />
                    </div>
                    <div className="episode-number-summary">
                      <span className="episode-num">Episode 2</span>
                      <span className="episode-summary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate quidem dolorem, voluptatem doloribus
                        nulla fugiat tempore doloremque.
                      </span>
                    </div>
                  </div>
                  <div className="episode-cntr">
                    <div className="episode-img-cntr">
                      <img src="../public/ep3-img1.png" alt="" />
                    </div>
                    <div className="episode-number-summary">
                      <span className="episode-num">Episode 3</span>
                      <span className="episode-summary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate quidem dolorem, voluptatem doloribus
                        nulla fugiat tempore doloremque.
                      </span>
                    </div>
                  </div>
                  <div className="episode-cntr">
                    <div className="episode-img-cntr">
                      <img src="../public/ep4-img1.png" alt="" />
                    </div>
                    <div className="episode-number-summary">
                      <span className="episode-num">Episode 4</span>
                      <span className="episode-summary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptate quidem dolorem, voluptatem doloribus
                        nulla fugiat tempore doloremque.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default AnimeList;
