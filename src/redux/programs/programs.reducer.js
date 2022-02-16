import ProgramsActionTypes from './programs.type'

const INITIAL_STATE = {
  categoryType: 'popular',
  programsType: 'movie',
  programsList: [],
}

const programsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ProgramsActionTypes.SET_CATEGORY_TYPE:
      return {
        ...state,
        categoryType: payload,
      }
    case ProgramsActionTypes.SET_PROGRAM_TYPE:
      return {
        ...state,
        programsType: payload,
      }
    case ProgramsActionTypes.SET_PROGRAMS:
      return {
        ...state,
        programsList: payload,
      }
    default:
      return state
  }
}

export default programsReducer
