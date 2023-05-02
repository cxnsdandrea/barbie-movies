import Movie from "@/components/movie";
import React from "react";
import movies from "@/lib/movies" 

export default function Home() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 auto-rows-fr justify-items-center">
      {movies.map((movie, index) => (<Movie key={index} movie={movie}/>
      ))}
    </div>
  );
}
