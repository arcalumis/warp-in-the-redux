import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import textModifierReducer from './textModifier'

const rootReducer = (history) => combineReducers({
  text: textModifierReducer,
  count: counterReducer,
  router: connectRouter(history)
})

export default rootReducer