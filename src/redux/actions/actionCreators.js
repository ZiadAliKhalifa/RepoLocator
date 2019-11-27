export const fetch_repos = () => {
  return {
    type: "FETCH_REPOS"
  };
};
export const receive_repos = repos => {
  return {
    type: "FETCHED_REPOS",
    data: repos
  };
};
export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};

export const set_search_phrase = searchPhrase => {
  return {
    type: "SET_SEARCH_PHRASE",
    data: searchPhrase
  };
};

export const increment_page_counter = () => {
  return {
    type: "INCREMENT_PAGE_COUNTER"
  };
};

export const decrement_page_counter = () => {
  return {
    type: "DECREMENT_PAGE_COUNTER"
  };
};

export const load_repository_info = () => {
  return {
    type: "LOAD_REPOSITORY_INFO"
  };
};

export const recieve_repository_info = () => {
  return {
    type: "RECIEVE_REPOSITORY_INFO"
  };
};

export const fail_repository_info = () => {
  return {
    type: "FAIL_REPOSITORY_INFO"
  };
};

export const download_repository_readme = () => {
  return {
    type: "DOWNLOAD_REPOSITORY_README"
  };
};

export const recieve_repository_readme = () => {
  return {
    type: "RECIEVE_REPOSITORY_README"
  };
};

export const fail_readme_download = () => {
  return {
    type: "FAIL_README_DOWNLOAD"
  };
};

export const fetch_user_repos = () => {
  return {
    type: "FETCH_USER_REPOS"
  };
};

export const recieve_user_repos = repos => {
  return {
    type: "RECIEVE_USER_REPOS",
    data: repos
  };
};

export const fail_user_repos = () => {
  return {
    type: "FAIL_USER_REPOS"
  };
};

export const increment_user_page_counter = () => {
  return {
    type: "INCREMENT_USER_PAGE_COUNTER"
  };
};

export const decrement_user_page_counter = () => {
  return {
    type: "DECREMENT_USER_PAGE_COUNTER"
  };
};

export const set_user_token = token => {
  return {
    type: "SET_USER_TOKEN",
    data: token
  };
};
