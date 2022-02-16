import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCategoryType,
  selectIsProgramsListLoaded,
  selectProgramsType,
} from '../../redux/programs/programs.selector'
import CardsContainer from '../../components/CardsContainer'
import FilteringSelectors from '../../components/FilteringSelectors'
import { setPrograms } from '../../redux/programs/programs.action'

const HomePage = () => {
  const dispatch = useDispatch()
  const categoryType = useSelector(selectCategoryType)
  const programsType = useSelector(selectProgramsType)
  const isProgramsLoaded = useSelector(selectIsProgramsListLoaded)
  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY
      const API_URL = 'https://api.themoviedb.org/3'
      try {
        const FETCH_URL = `${API_URL}/${programsType}/${categoryType}?api_key=${API_KEY}&language=en-US&page=1`
        const res = await fetch(FETCH_URL)
        const data = await res.json()
        dispatch(setPrograms(data.results))
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies()
  }, [categoryType, programsType, dispatch])
  return (
    <section>
      <FilteringSelectors />
      {isProgramsLoaded ? (
        <CardsContainer />
      ) : (
        <div className='text-lg text-center'>Loading...</div>
      )}
    </section>
  )
}

export default HomePage
