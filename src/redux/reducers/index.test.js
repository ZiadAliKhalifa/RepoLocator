import asyncReducer from "./index";
import types from "../actions/actionTypes";

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

describe("Testing reducer", () => {
  it("should return the initial state when it gets an action it does not know", () => {
    expect(asyncReducer(initialState, "action")).toMatchObject({
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
    });
  });

  it("is fetching should be true when it recieves order to fetch repos", () => {
    expect(asyncReducer(initialState, { type: "FETCH_REPOS" })).toMatchObject({
      apiReturn: {},
      isFetching: true,
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
    });
  });

  it("is fetching should be true when it recieves order to fetch repos", () => {
    expect(
      asyncReducer(initialState, {
        type: "FETCHED_REPOS",
        data: { recieved: "repos" }
      })
    ).toMatchObject({
      apiReturn: { recieved: "repos" },
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
    });
  });

  it("is fetching should be false when it recieves error to fetch repos", () => {
    expect(
      asyncReducer(initialState, {
        type: "RECEIVE_ERROR"
      })
    ).toMatchObject({
      apiReturn: {},
      isFetching: false,
      isError: true,
      pageNumber: 1,
      searchPhrase: "",
      userData: {
        token: "",
        userApiReturn: {},
        userPageNumber: 1,
        isFetchingUserRepos: false,
        isErrorUserRepos: false
      }
    });
  });

  it("should change search phrase", () => {
    expect(
      asyncReducer(initialState, {
        type: "SET_SEARCH_PHRASE",
        data: "phrase"
      })
    ).toMatchObject({
      apiReturn: {},
      isFetching: false,
      isError: false,
      pageNumber: 1,
      searchPhrase: "phrase",
      userData: {
        token: "",
        userApiReturn: {},
        userPageNumber: 1,
        isFetchingUserRepos: false,
        isErrorUserRepos: false
      }
    });
  });

  it("should increment page counter", () => {
    expect(
      asyncReducer(initialState, {
        type: "INCREMENT_PAGE_COUNTER"
      })
    ).toMatchObject({
      apiReturn: {},
      isFetching: false,
      isError: false,
      pageNumber: 2,
      searchPhrase: "",
      userData: {
        token: "",
        userApiReturn: {},
        userPageNumber: 1,
        isFetchingUserRepos: false,
        isErrorUserRepos: false
      }
    });
  });

  it("should decrement page counter", () => {
    expect(
      asyncReducer(initialState, {
        type: "DECREMENT_PAGE_COUNTER"
      })
    ).toMatchObject({
      apiReturn: {},
      isFetching: false,
      isError: false,
      pageNumber: 0,
      searchPhrase: "",
      userData: {
        token: "",
        userApiReturn: {},
        userPageNumber: 1,
        isFetchingUserRepos: false,
        isErrorUserRepos: false
      }
    });
  });

  it("should trigger fetching for user repos", () => {
    expect(
      asyncReducer(initialState, {
        type: "FETCH_USER_REPOS"
      })
    ).toMatchObject({
      apiReturn: {},
      isFetching: false,
      isError: false,
      pageNumber: 1,
      searchPhrase: "",
      userData: {
        token: "",
        userApiReturn: {},
        userPageNumber: 1,
        isFetchingUserRepos: true,
        isErrorUserRepos: false
      }
    });
  });

  it("should trigger fetching for user repos", () => {
    expect(
      asyncReducer(initialState, {
        type: "RECIEVE_USER_REPOS",
        data: {}
      })
    ).toMatchObject({
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
    });
  });

  it("should trigger fetching for user repos", () => {
    expect(
      asyncReducer(initialState, {
        type: "FAIL_USER_REPOS"
      })
    ).toMatchObject({
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
        isErrorUserRepos: true
      }
    });
  });
});
