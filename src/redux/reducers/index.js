const initialState = {
  apiReturn: {},
  isFetching: false,
  isError: false
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REPOS":
      return Object.assign({}, state, {
        apiReturn: {},
        isFetching: true,
        isError: false
      });
    case "FETCHED_REPOS":
      return Object.assign({}, state, {
        apiReturn: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false
      });
    default:
      return state;
  }
};
export default asyncReducer;
