const initialState = {
  apiReturn: {},
  isFetching: false,
  isError: false,
  pageNumber: 1
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REPOS":
      return Object.assign({}, state, {
        apiReturn: {},
        isFetching: true,
        isError: false,
        pageNumber: state.pageNumber
      });
    case "FETCHED_REPOS":
      return Object.assign({}, state, {
        apiReturn: action.data,
        isFetching: false,
        isError: false,
        pageNumber: state.pageNumber
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false,
        pageNumber: state.pageNumber
      });
    default:
      return state;
  }
};
export default asyncReducer;
