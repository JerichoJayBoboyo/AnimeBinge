import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav.jsx";
import Hero from "./Hero.jsx";
import AnimeList from "./AnimeList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Hero />
    <AnimeList />
  </StrictMode>
);
