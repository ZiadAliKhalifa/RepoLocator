import {
  fetch_repos,
  receive_repos,
  receive_error,
  set_search_phrase,
  increment_page_counter,
  decrement_page_counter,
  load_repository_info,
  recieve_repository_info,
  fail_repository_info,
  download_repository_readme,
  recieve_repository_readme,
  fetch_user_repos,
  fail_readme_download,
  recieve_user_repos,
  fail_user_repos
} from "./actionCreators";

test("Fetch Repos", () => {
  expect(fetch_repos()).toMatchObject({ type: "FETCH_REPOS" });
});
test("Recieve Repos", () => {
  expect(receive_repos("REPOS")).toMatchObject({
    type: "FETCHED_REPOS",
    data: "REPOS"
  });
});
test("Recieve error", () => {
  expect(receive_error()).toMatchObject({ type: "RECEIVE_ERROR" });
});
test("Set a search phrase", () => {
  expect(set_search_phrase("phrase")).toMatchObject({
    type: "SET_SEARCH_PHRASE",
    data: "phrase"
  });
});
test("Increment page counter", () => {
  expect(increment_page_counter()).toMatchObject({
    type: "INCREMENT_PAGE_COUNTER"
  });
});
test("Decrement page counter", () => {
  expect(decrement_page_counter()).toMatchObject({
    type: "DECREMENT_PAGE_COUNTER"
  });
});
test("Load repository info", () => {
  expect(load_repository_info()).toMatchObject({
    type: "LOAD_REPOSITORY_INFO"
  });
});
test("Recieve the repository info", () => {
  expect(recieve_repository_info()).toMatchObject({
    type: "RECIEVE_REPOSITORY_INFO"
  });
});
test("Fail getting the repository info", () => {
  expect(fail_repository_info()).toMatchObject({
    type: "FAIL_REPOSITORY_INFO"
  });
});
test("Download teh read me for a repo", () => {
  expect(download_repository_readme()).toMatchObject({
    type: "DOWNLOAD_REPOSITORY_README"
  });
});
test("Recieve the read me for a repo", () => {
  expect(recieve_repository_readme()).toMatchObject({
    type: "RECIEVE_REPOSITORY_README"
  });
});
test("Fail while getting the read me for the repo", () => {
  expect(fail_readme_download()).toMatchObject({
    type: "FAIL_README_DOWNLOAD"
  });
});
test("Get repos for a user", () => {
  expect(fetch_user_repos()).toMatchObject({
    type: "FETCH_USER_REPOS"
  });
});
test("Recieve the user repos", () => {
  expect(recieve_user_repos("USER_REPOS")).toMatchObject({
    type: "RECIEVE_USER_REPOS",
    data: "USER_REPOS"
  });
});
test("Fail while getting the user repos", () => {
  expect(fail_user_repos()).toMatchObject({ type: "FAIL_USER_REPOS" });
});
