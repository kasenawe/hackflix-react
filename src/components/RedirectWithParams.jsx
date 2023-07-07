import React from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";

function RedirectWithParams() {
  const { id } = useParams();

  return <Navigate replace to={`/pelicula/${id}`} />;
}

export default RedirectWithParams;
