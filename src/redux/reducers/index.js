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
      if (state.pageNumber === 1) {
        return Object.assign({}, state, {
          apiReturn: {},
          isFetching: true,
          isError: false,
          pageNumber: state.pageNumber,
          searchPhrase: state.searchPhrase
        });
      } else {
        return Object.assign({}, state, {
          apiReturn: { ...state.apiReturn },
          isFetching: true,
          isError: false,
          pageNumber: state.pageNumber,
          searchPhrase: state.searchPhrase
        });
      }

    case "FETCHED_REPOS":
      let dataToSet = { ...action.data };
      if (state.pageNumber === 1) {
        return Object.assign({}, state, {
          apiReturn: dataToSet,
          isFetching: false,
          isError: false,
          pageNumber: state.pageNumber,
          searchPhrase: state.searchPhrase
        });
      } else {
        console.log("This is a load more call");
        let dataAlreadyDisplayed = state.apiReturn;
        console.log(dataAlreadyDisplayed);

        return Object.assign({}, state, {
          apiReturn: dataToSet,
          isFetching: false,
          isError: false,
          pageNumber: state.pageNumber,
          searchPhrase: state.searchPhrase
        });
      }
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

    default:
      return state;
  }
};
export default asyncReducer;
