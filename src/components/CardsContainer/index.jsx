import React from 'react'
import Card from '../Card'

const CardsContainer = ({ title, results }) => {
  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 mb-20'>
      <h1 className='text-4xl font-bold text-gray-700 mb-12'>{title}</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {results?.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default CardsContainer
