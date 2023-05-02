import Link from "next/link";
import React from "react";
import { MdStar } from "react-icons/md";

export default function Movie({ movie }) {
  return (
    <Link href={movie.url} className="flex flex-col gap-2 hover:scale-110 transition-all hover:shadow-xl hover:shadow-pink-400 hover:bg-pink-500 hover:text-white w-56 p-2 rounded-lg">
      <img src={movie.portada} className="h-72 w-full rounded-lg" />
      <h1 className="text-lg font-bold">{`${movie.titulo.substring(0, 31)}${
        movie.titulo.length > 31 ? "..." : ""
      }`}</h1>
      <div className="flex justify-between w-full">
        <p className="flex items-center gap-1">
          {movie.calificacion} <MdStar className="text-orange-400" />
        </p>
        <p>{movie.duracion}</p>
      </div>
      <p className="truncate text-sm">{movie.descripcion}</p>
    </Link>
  );
}
