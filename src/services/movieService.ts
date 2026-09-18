import axios from 'axios';
import type { Movie } from '../types/movie';

const myKey = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

interface Response {
  results: Movie[];
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<Response>(BASE_URL, {
    params: {
      query,
    },
    headers: {
      Authorization: `Bearer ${myKey}`,
    },
  });
  return response.data.results;
}
