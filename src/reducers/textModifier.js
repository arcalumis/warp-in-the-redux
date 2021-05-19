

const textModifierReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_TEXT_ONE':
        return { ...state, text_one : action.text }
      case 'SET_TEXT_TWO':
        return { ...state, text_two : action.text }
      default:
        return state
    }
  }
  
  export default textModifierReducer