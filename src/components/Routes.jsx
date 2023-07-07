import { Routes, Route, Navigate } from "react-router-dom";
import RedirectWithParams from "./RedirectWithParams";
import MovieDetails from "./MovieDetails";
import Filter from "./Filter";
import About from "./About";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Search from "./Search";

function HaRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Filter />} />
      <Route path="/pelicula/:id" element={<MovieDetails />} />
      <Route path="/movie/:id" element={<RedirectWithParams />} />
      <Route path="/sobre-nosotros" element={<About />} />
      <Route path="/contacto" element={<Contact />} />
      <Route path="/buscar" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default HaRoutes;
