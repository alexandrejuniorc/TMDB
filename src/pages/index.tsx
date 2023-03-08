import { MovieCard } from '@/components/MovieCard'
import { MoviesContainer } from '@/styles/pages/home'

import { getMoviesTopRated } from '@/utils/get-movies-top-rated'

import { useQuery } from '@tanstack/react-query'

interface MoviesPros {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export default function Home() {
  const moviesTopRated = useQuery({
    queryKey: ['moviesTopRated'],
    queryFn: getMoviesTopRated,
  })

  return (
    <>
      {moviesTopRated.isLoading && <p>Loading...</p>}

      {moviesTopRated.isError && <p>Error...</p>}

      <MoviesContainer>
        {!moviesTopRated.isLoading &&
          !moviesTopRated.isError &&
          moviesTopRated.data.results.length > 0 &&
          moviesTopRated.data.results.map((movie: MoviesPros) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                imageUrl={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            )
          })}
      </MoviesContainer>
    </>
  )
}
