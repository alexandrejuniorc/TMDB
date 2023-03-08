import axios from 'axios'

export const api = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  params: {
    api_key: '4da0d1eebb492574e82433c586e6f475',
  },
})
