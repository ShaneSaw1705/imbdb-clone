import React from 'react'
import request from 'superagent'
import { useRouter } from 'next/router'
import type { Movie } from '../../models/Movies'

export async function getServerSideProps(context: { params: { movie: any } }) {
  try {
    const movie = context.params.movie
    
    const data = await request.get(`https://www.omdbapi.com/?apikey=9fb97b07&t=${movie}&plot=full`)
    
    const movieData: Movie = data.body

    return {
      props: { movieData }
    }
  } catch (error) {
    console.error('Error fetching movie data:', error)
    return {
      props: { movieData: null }, // Return null data to indicate error
    }
  }
}


interface Props {
  movieData: Movie
}

export default function Movie({movieData}: Props) {
  const router = useRouter()
  return (
    <div className='flex flex-row justify-evenly items-start'>
      <div className='w-[60%] gap-4 flex flex-col'>
        <h1 className='text-6xl'>{movieData.Title}</h1>
        <p>{movieData.Plot}</p>
      </div>
      <img className='w-[30%]' src={movieData.Poster} alt="" />
    </div>
  )
}
