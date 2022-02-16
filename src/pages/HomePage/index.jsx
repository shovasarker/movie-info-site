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
import { fetchCategorizedPrograms } from '../../utilities/api'

const HomePage = () => {
  const dispatch = useDispatch()
  const categoryType = useSelector(selectCategoryType)
  const programsType = useSelector(selectProgramsType)
  const isProgramsLoaded = useSelector(selectIsProgramsListLoaded)
  useEffect(() => {
    const fetchPrograms = async () => {
      const results = await fetchCategorizedPrograms(
        categoryType,
        programsType,
        1
      )
      dispatch(setPrograms(results))
    }
    fetchPrograms()
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
