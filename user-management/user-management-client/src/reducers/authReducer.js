const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };

    case "LOGOUT":
      return {
        isAuthenticated: false,
        username: null,
        profile: null,
      };

    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
