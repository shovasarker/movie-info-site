import { combineReducers } from 'redux'
import programsReducer from './programs/programs.reducer'

const rootReducer = combineReducers({
  programs: programsReducer,
})

export default rootReducer
