import { MovieCard } from '@/components/MovieCard'
import { MoviesContainer } from '@/styles/pages/home'
import { getPathFilm } from '@/utils/get-api-using-path'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'

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

async function getFilm() {
  const path = '/movie/top_rated'
  const response = getPathFilm({ path }).then((dataContent) => {
    console.log(dataContent)

    return dataContent
  })

  return response
}

export default function Home() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['films'],
    queryFn: getFilm,
  })

  console.log(data)

  return (
    <main>
      {isLoading && <p>Loading...</p>}

      {isError && <p>Error...</p>}

      <MoviesContainer>
        {!isLoading &&
          !isError &&
          data.results.length > 0 &&
          data.results.map((movie: MoviesPros) => {
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
    </main>
  )
}
