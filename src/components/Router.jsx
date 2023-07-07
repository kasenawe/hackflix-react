import { Routes, Route, Navigate } from "react-router-dom";
import RedirectWithParams from "../Pages/RedirectWithParams";
import MovieDetails from "../Pages/MovieDetails";
import Filter from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import Search from "../Pages/Search";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Filter />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/pelicula/:id" element={<RedirectWithParams />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
