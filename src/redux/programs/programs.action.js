import ProgramsActionTypes from './programs.type'

export const setcategoryType = (categoryType) => ({
  type: ProgramsActionTypes.SET_CATEGORY_TYPE,
  payload: categoryType,
})

export const setProgramsType = (programsType) => ({
  type: ProgramsActionTypes.SET_PROGRAM_TYPE,
  payload: programsType,
})

export const setPrograms = (programs) => ({
  type: ProgramsActionTypes.SET_PROGRAMS,
  payload: programs,
})
