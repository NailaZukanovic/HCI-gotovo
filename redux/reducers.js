const initialState = {
  token: null
}

export default (state = initialState, action) => {
  switch(action.type)
  {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload
      }
    case 'LOGOUT':
      return {
        token: null
      }
    default:
      return state
  }
};