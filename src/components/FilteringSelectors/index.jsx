import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { FILTERING_SELECTORS_DATA } from '../../data'
import movieIcon from '../../images/icon-movie.png'
import tvShowIcon from '../../images/icon-tv-show.png'
import typeIcon from '../../images/icon-type.png'
import {
  setcategoryType,
  setProgramsType,
} from '../../redux/programs/programs.action'
import {
  selectCategoryType,
  selectProgramsType,
} from '../../redux/programs/programs.selector'

const FilteringSelectors = () => {
  const { typeSelectorData, showTypeSelectorData } = FILTERING_SELECTORS_DATA
  const categoryType = useSelector(selectCategoryType)
  const programsType = useSelector(selectProgramsType)
  const dispatch = useDispatch()
  const typeSelector = typeSelectorData[programsType]

  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 my-12 flex justify-start items-center gap-4 flex-wrap text-gray-700'>
      <div className=' relative bg-white rounded-md shadow-md flex justify-center items-center'>
        <img
          className='inline-block w-6 h-6 absolute left-3 top-50p -translate-y-50p'
          src={programsType === 'movie' ? movieIcon : tvShowIcon}
          alt=''
        />
        <select
          className='pl-10 pr-3 py-2 w-full bg-white rounded-md cursor-pointer font-semibold text-lg focus:outline-none'
          value={programsType}
          onChange={(e) => {
            dispatch(setProgramsType(e.target.value))
            dispatch(setcategoryType('popular'))
          }}
        >
          {showTypeSelectorData?.map(([itemValue, item], i) => {
            return (
              <option key={i} value={itemValue}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
      <div className=' relative bg-white rounded-md shadow-md flex justify-center items-center'>
        <img
          className='inline-block w-6 h-6 absolute left-3 top-50p -translate-y-50p'
          src={typeIcon}
          alt=''
        />
        <select
          className='pl-10 pr-3 py-2 w-full bg-white rounded-md cursor-pointer font-semibold text-lg focus:outline-none'
          value={categoryType}
          onChange={(e) => dispatch(setcategoryType(e.target.value))}
        >
          {typeSelector?.map(([itemValue, item], i) => {
            return (
              <option key={i} value={itemValue}>
                {item}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default FilteringSelectors
