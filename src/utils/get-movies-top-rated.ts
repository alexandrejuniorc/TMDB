import { getPathFilm } from './get-api-using-path'

export async function getMoviesTopRated() {
  const response = getPathFilm({ path: '/movie/top_rated' }).then(
    (dataContent) => dataContent,
  )

  return response
}
