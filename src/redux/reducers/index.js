const initialState = {
  apiReturn: {},
  isFetching: false,
  isError: false,
  pageNumber: 1,
  searchPhrase: "",
  userData: {
    token: "",
    userApiReturn: {},
    userPageNumber: 1,
    isFetchingUserRepos: false,
    isErrorUserRepos: false
  }
};

const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REPOS":
      return Object.assign({}, state, {
        apiReturn: {},
        isFetching: true,
        isError: false,
        pageNumber: state.pageNumber,
        searchPhrase: state.searchPhrase,
        userData: { ...state.userData }
      });

    case "FETCHED_REPOS":
      return Object.assign({}, state, {
        apiReturn: { ...action.data },
        isFetching: false,
        isError: false,
        pageNumber: state.pageNumber,
        searchPhrase: state.searchPhrase,
        userData: { ...state.userData }
      });

    case "RECEIVE_ERROR":
      return Object.assign({}, state, {
        isError: true,
        isFetching: false,
        pageNumber: state.pageNumber,
        searchPhrase: state.searchPhrase,
        userData: { ...state.userData }
      });

    case "SET_SEARCH_PHRASE":
      let newState = { ...state };
      newState.searchPhrase = action.data;
      return Object.assign({}, state, newState);

    case "INCREMENT_PAGE_COUNTER":
      let stateToChange = { ...state };
      stateToChange.pageNumber = stateToChange.pageNumber + 1;
      return Object.assign({}, state, stateToChange);

    case "DECREMENT_PAGE_COUNTER":
      let stateToDec = { ...state };
      stateToDec.pageNumber = stateToDec.pageNumber - 1;
      return Object.assign({}, state, stateToDec);

    case "FETCH_USER_REPOS":
      let stateLoadingUserRepos = { ...state };
      stateLoadingUserRepos.userData.isFetchingUserRepos = true;
      return Object.assign({}, state, stateLoadingUserRepos);

    case "RECIEVE_USER_REPOS":
      let stateWithUserRepos = { ...state };
      stateWithUserRepos.userData.userApiReturn = action.data;
      stateWithUserRepos.userData.isFetchingUserRepos = false;
      stateWithUserRepos.userData.isErrorUserRepos = false;

      return Object.assign({}, state, stateWithUserRepos);

    case "FAIL_USER_REPOS":
      let stateWithUserReposFail = { ...state };
      stateWithUserReposFail.userData.isFetchingUserRepos = false;
      stateWithUserReposFail.userData.isErrorUserRepos = true;
      return Object.assign({}, state, stateWithUserReposFail);

    default:
      return state;
  }
};
export default asyncReducer;
