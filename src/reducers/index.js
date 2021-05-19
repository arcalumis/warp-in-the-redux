import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import textModifierReducer from './textModifier'
import userDataReducer from './user'

const rootReducer = (history) => combineReducers({
  user : userDataReducer,
  text: textModifierReducer,
  count: counterReducer,
  router: connectRouter(history)
})

export default rootReducer