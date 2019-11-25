const initialState = {
  apiReturn: {},
  isFetching: false,
  isError: false,
  pageNumber: 1,
  searchPhrase: ""
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REPOS":
      return Object.assign({}, state, {
        apiReturn: {},
        isFetching: true,
        isError: false,
        pageNumber: state.pageNumber,
        searchPhrase: state.searchPhrase
      });
    case "FETCHED_REPOS":
      if (state.pageNumber == 1) {
        console.log("This is my first call!");
      } else {
        console.log("This is a load more call");
      }
      return Object.assign({}, state, {
        apiReturn: action.data,
        isFetching: false,
        isError: false,
        pageNumber: state.pageNumber,
        searchPhrase: state.searchPhrase
      });
    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false,
        pageNumber: state.pageNumber,
        searchPhrase: state.searchPhrase
      });

    case "SET_SEARCH_PHRASE":
      let newState = { ...state };
      newState.searchPhrase = action.data;
      return Object.assign({}, state, newState);

    default:
      return state;
  }
};
export default asyncReducer;
