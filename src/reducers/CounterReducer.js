export const initialState = {
  count: 0,
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      if (state.count > 0) return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "incrementByAmount":
      return { ...state, count: state.count + action.payload };
    default:
      return state;
  }
};
