import React from "react";

import useMovies from "@/hooks/useMovies";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const { movieId } = router.query;
  const { data: movie } = useMovies(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex items-center gap-8 bg-opacity-70 bg-black">
        <AiOutlineArrowLeft onClick={() => router.push("/")} className="text-white cursor-pointer" size={40} />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:</span>
          {movie?.title}
        </p>
      </nav>
      <video autoPlay controls className="h-full w-full" src={movie?.videoUrl}></video>
    </div>
  );
};

export default Watch;
