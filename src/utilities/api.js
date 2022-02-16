import { API_KEY, API_URL } from './config'

export const fetchCategorizedPrograms = async (
  categoryType,
  programsType,
  pageNumber
) => {
  const FETCH_URL = `${API_URL}/${programsType}/${categoryType}?api_key=${API_KEY}&language=en-US&page=${pageNumber}`
  try {
    const response = await fetch(FETCH_URL)
    if (response.status === 200) {
      const data = await response.json()
      return data.results
    }
  } catch (error) {
    console.log(error.message)
  }
}

export const fetchProgramDetails = async (programType, programId) => {
  const FETCH_URL = `${API_URL}/${programType}/${programId}?api_key=${API_KEY}&language=en-US`
  try {
    const response = await fetch(FETCH_URL)
    if (response.status === 200) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    console.log(error.message)
  }
}
