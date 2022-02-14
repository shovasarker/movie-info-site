import React from 'react'
import { FILTERING_SELECTORS_DATA } from '../../data'

const FilteringSelectors = ({
  selectedType,
  setSelectedType,
  selectedShowType,
  setSelectedShowType,
}) => {
  const { typeSelectorData, showTypeSelectorData } = FILTERING_SELECTORS_DATA
  const typeSelector = typeSelectorData[selectedShowType]
  return (
    <div className='container px-6 md:px-10 lg:px-16 xl:px-20 mb-12 flex justify-start items-center gap-4 flex-wrap text-gray-700'>
      <select
        className='px-3 py-2 bg-white rounded-md shadow-md cursor-pointer font-semibold text-lg focus:outline-none'
        value={selectedShowType}
        onChange={(e) => setSelectedShowType(e.target.value)}
      >
        {showTypeSelectorData?.map(([itemValue, item], i) => {
          return (
            <option key={i} value={itemValue}>
              {item}
            </option>
          )
        })}
      </select>
      <select
        className='px-3 py-2 bg-white rounded-md shadow-md cursor-pointer font-semibold text-lg focus:outline-none'
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
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
  )
}

export default FilteringSelectors
