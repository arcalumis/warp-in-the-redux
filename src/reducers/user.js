

const userDataReducer = (state = {}, action) => {
    switch (action.type) {
      case 'USER_FETCH_SUCCEEDED':
        console.log(action)
        return { ...state, firstName : action.user.firstName, lastName : action.user.lastName }
      case 'USER_FETCH_FAILED':
        return { ...state, firstName : '', lastName : '' }
      default:
        return state
    }
  }
  
  export default userDataReducer