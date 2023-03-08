import { api } from '../services/axios'

interface UtilsApiProps {
  path: string
  page?: number
  withoutPagination?: any
}

export async function getPathFilm({
  path,
  page,
  withoutPagination,
}: UtilsApiProps) {
  if (page === undefined) {
    page = 1
  }

  const apiKey = '4da0d1eebb492574e82433c586e6f475'

  const language = 'pt-BR'

  let url = `https://api.themoviedb.org/3${path}?page=${page}&language=${language}&api_key=${apiKey}`

  if (withoutPagination) {
    url = `https://api.themoviedb.org/3${path}?language=${language}&api_key=${apiKey}`
  }

  const response = await api.get(url)

  if (response.status === 200) {
    return response.data
  } else {
    return response.statusText
  }
}

export function getImage(path: string) {
  const fullPath = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${path}`

  return fullPath
}
