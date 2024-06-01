import React from 'react'
import request from 'superagent'
import { useRouter } from 'next/router'
import { Movies } from '../../models/Movies'
import Movie from '@/components/Movie'

export async function getServerSideProps(context: { query: any }) {
  const { query } = context
  const searchTerm = query.q || 'spider-man'

  try {
    const data = await request.get(`https://www.omdbapi.com/?apikey=9fb97b07&s=${searchTerm}`)
    const movies: Movies = data.body

    return {
      props: { movies }
    }
  } catch {
    throw new Error
  }
}

interface Props {
  movies: Movies
}

export default function Index({movies}: Props) {
  const router = useRouter()
  const { q } = router.query

  return (
    <div>
      <h1 className='text-3xl'>Movies</h1>
      <div className='grid grid-cols-4 grid-rows-3 gap-3'>
        {movies.Search.map(movie => <Movie key={movie.imdbID} {...movie} />)}
      </div>
    </div>
  )
}
