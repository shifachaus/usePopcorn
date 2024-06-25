import { useEffect, useState } from "react";
import { KEY } from "../data";

export function useMovieDetails(ID) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${ID}`);

      const data = await res.json();

      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [ID]);

  return { movie, isLoading };
}
