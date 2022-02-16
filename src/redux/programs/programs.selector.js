import { createSelector } from 'reselect'

const selectPrograms = (state) => state.programs

export const selectCategoryType = createSelector(
  [selectPrograms],
  (programs) => programs.categoryType
)

export const selectProgramsType = createSelector(
  [selectPrograms],
  (programs) => programs.programsType
)

export const selectProgramsList = createSelector(
  [selectPrograms],
  (programs) => programs.programsList
)

export const selectIsProgramsListLoaded = createSelector(
  [selectPrograms],
  (programs) => !!programs.programsList.length
)
