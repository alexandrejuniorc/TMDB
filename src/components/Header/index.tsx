import Image from 'next/image'

import Logo from '../../assets/logo.svg'
import {
  AllOptionsContainer,
  FilterMovieContainer,
  HeaderContainer,
  LogoContainer,
  Option,
  OptionsMoviesContainer,
} from './styles'
import { useQuery } from '@tanstack/react-query'
import { getGenreMovies } from '@/utils/get-genre-movies'

// import { AiFillCloseCircle } from 'react-icons/ai'

interface GenreMoviesProps {
  id: number
  name: string
}

export const Header = () => {
  const genreMovies = useQuery({
    queryKey: ['genreMovies'],
    queryFn: getGenreMovies,
  })

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Image src={Logo} alt="Logo TMDB" />
        </LogoContainer>
      </HeaderContainer>

      <FilterMovieContainer>
        <h1>
          Milhões de filmes, séries e pessoas <br />
          para descobrir. Explore já.
        </h1>

        <OptionsMoviesContainer>
          <p>FILTRE POR:</p>

          <AllOptionsContainer>
            {genreMovies.isLoading && <p>Loading options...</p>}
            {genreMovies.isError && <p>Error in options...</p>}

            {!genreMovies.isError &&
              !genreMovies.isLoading &&
              genreMovies.data.genres.length > 0 &&
              genreMovies.data.genres.map(({ id, name }: GenreMoviesProps) => (
                <Option key={id}>
                  <p>
                    {name} {/* <AiFillCloseCircle size={20} /> */}
                  </p>
                </Option>
              ))}
          </AllOptionsContainer>
        </OptionsMoviesContainer>
      </FilterMovieContainer>
    </>
  )
}
