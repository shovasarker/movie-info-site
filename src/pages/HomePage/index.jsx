import React, { useEffect, useState } from 'react'
import CardsContainer from '../../components/CardsContainer'
import FilteringSelectors from '../../components/FilteringSelectors'

const HomePage = () => {
  const [movies, setMovies] = useState([])
  const [selectedShowType, setSelectedShowType] = useState('movie')
  const [selectedType, setSelectedType] = useState('popular')
  const type = selectedType.split('_').join(' ')
  const title = `${type} ${
    selectedShowType === 'movie'
      ? 'movies'
      : selectedShowType === 'tv' && 'tv shows'
  }`
  useEffect(() => {
    setSelectedType('popular')
  }, [selectedShowType])

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = process.env.REACT_APP_API_KEY
      const API_URL = 'https://api.themoviedb.org/3'
      try {
        const FETCH_URL = `${API_URL}/${selectedShowType}/${selectedType}?api_key=${API_KEY}&language=en-US&page=1`
        const res = await fetch(FETCH_URL)
        const data = await res.json()
        console.log(data)
        setMovies(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMovies()
  }, [selectedType, selectedShowType])
  return (
    <section>
      <FilteringSelectors
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedShowType={selectedShowType}
        setSelectedShowType={setSelectedShowType}
      />
      <CardsContainer title={title.toUpperCase()} results={movies} />
    </section>
  )
}

export default HomePage
