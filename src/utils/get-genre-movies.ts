import { getPathFilm } from './get-api-using-path'

export async function getGenreMovies() {
  const response = getPathFilm({
    path: '/genre/movie/list?api_key=4da0d1eebb492574e82433c586e6f475&language=pt-BR',
  }).then((dataContent) => dataContent)

  return response
}
