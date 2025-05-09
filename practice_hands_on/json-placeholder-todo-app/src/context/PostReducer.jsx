export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;

    case "ADD_POST":
      return [action.payload, ...state];

    case "UPDATE_POST":
      return state.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );

    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);

    default:
      return state;
  }
};
