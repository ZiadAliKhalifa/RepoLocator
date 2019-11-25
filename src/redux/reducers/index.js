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
      return Object.assign({}, state, {
        apiReturn: { ...action.data },
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

    case "INCREMENT_PAGE_COUNTER":
      let stateToChange = { ...state };
      stateToChange.pageNumber = stateToChange.pageNumber + 1;
      console.log(stateToChange);
      return Object.assign({}, state, stateToChange);

    case "DECREMENT_PAGE_COUNTER":
      let stateToDec = { ...state };
      stateToDec.pageNumber = stateToDec.pageNumber - 1;
      console.log(stateToDec);
      return Object.assign({}, state, stateToDec);

    default:
      return state;
  }
};
export default asyncReducer;
