/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type { Movie } from '../../models/Movies'
import Image from 'next/image'

export default function Movie(props: Movie) {
  return (
    <div className='flex flex-col w-96 h-80 overflow-hidden bg-slate-500 hover:scale-110 transition-all ease-in-out'>
      <img src={props.Poster} alt="" className='w-full h-0.5 flex-grow object-cover' />
      <h3 className='py-8 mx-3'>{props.Title}</h3>
    </div>
  )
}
