import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectCategoryType,
  selectProgramsList,
  selectProgramsType,
} from '../../redux/programs/programs.selector'
import Card from '../Card'

const CardsContainer = () => {
  const results = useSelector(selectProgramsList)
  const categoryType = useSelector(selectCategoryType)
  const programsType = useSelector(selectProgramsType)
  const getTitle = () => {
    const type = categoryType.split('_').join(' ')
    const title = `${type} ${
      programsType === 'movie' ? 'movies' : programsType === 'tv' && 'tv shows'
    }`

    return title.toUpperCase()
  }
  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 mb-20'>
      <h1 className='text-2xl md:text-3xl font-bold text-gray-700 mb-12'>
        {getTitle()}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
        {results?.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default CardsContainer
