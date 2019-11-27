import types from "./actionTypes";

export const fetch_repos = () => {
  return {
    type: types.FETCH_REPOS
  };
};
export const receive_repos = repos => {
  return {
    type: types.FETCHED_REPOS,
    data: repos
  };
};
export const receive_error = () => {
  return {
    type: types.RECEIVE_ERROR
  };
};

export const set_search_phrase = searchPhrase => {
  return {
    type: types.SET_SEARCH_PHRASE,
    data: searchPhrase
  };
};

export const increment_page_counter = () => {
  return {
    type: types.INCREMENT_PAGE_COUNTER
  };
};

export const decrement_page_counter = () => {
  return {
    type: types.DECREMENT_PAGE_COUNTER
  };
};

export const load_repository_info = () => {
  return {
    type: types.LOAD_REPOSITORY_INFO
  };
};

export const recieve_repository_info = () => {
  return {
    type: types.RECIEVE_REPOSITORY_INFO
  };
};

export const fail_repository_info = () => {
  return {
    type: types.FAIL_REPOSITORY_INFO
  };
};

export const download_repository_readme = () => {
  return {
    type: types.DOWNLOAD_REPOSITORY_README
  };
};

export const recieve_repository_readme = () => {
  return {
    type: types.RECIEVE_REPOSITORY_README
  };
};

export const fail_readme_download = () => {
  return {
    type: types.FAIL_README_DOWNLOAD
  };
};

export const fetch_user_repos = () => {
  return {
    type: types.FETCH_USER_REPOS
  };
};

export const recieve_user_repos = repos => {
  return {
    type: types.RECIEVE_USER_REPOS,
    data: repos
  };
};

export const fail_user_repos = () => {
  return {
    type: types.FAIL_USER_REPOS
  };
};
