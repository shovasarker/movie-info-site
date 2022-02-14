import React from 'react'
import fallbackImage from '../../images/fallback-image.jpg'

const Card = ({ item }) => {
  const BASE_URL = 'http://image.tmdb.org/t/p/'
  const {
    id,
    title,
    name,
    backdrop_path,
    vote_average,
    release_date,
    first_air_date,
  } = item
  const release_year = release_date
    ? release_date.slice(0, 4)
    : first_air_date.slice(0, 4)
  return (
    <div
      key={id}
      className='w-10/12 md:w-full mx-auto md:mx-0 rounded-xl overflow-hidden cursor-pointer space-y-3 pb-4 text-gray-700'
    >
      <div>
        <img
          className='w-full h-96 md:h-80 object-cover rounded-xl'
          src={
            backdrop_path ? `${BASE_URL}w780${backdrop_path}` : fallbackImage
          }
          alt=''
        />
      </div>
      <h4
        className='text-lg font-semibold truncate'
        title={title ? title : name}
      >
        {title ? title : name}
      </h4>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>{release_year}</p>
        <p className='w-8 h-8 bg-blue-300 rounded-full flex justify-center items-center'>
          {vote_average}
        </p>
      </div>
    </div>
  )
}

export default Card
