const initialState = {
  list: [],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    default: {
      return state;
    }
  }
};

export default addReducer;
