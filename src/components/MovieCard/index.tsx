import React from 'react'
import { MovieCardContainer } from './styles'

interface MovieCardProps {
  id: number
  imageUrl: string
  title: string
  releaseDate: string
}

export const MovieCard = ({
  id,
  imageUrl,
  releaseDate,
  title,
}: MovieCardProps) => {
  return (
    <MovieCardContainer key={id}>
      <img src={imageUrl} alt={title} width="176px" height="264px" />
      <h3>{title}</h3>
      <p>{releaseDate}</p>
    </MovieCardContainer>
  )
}
