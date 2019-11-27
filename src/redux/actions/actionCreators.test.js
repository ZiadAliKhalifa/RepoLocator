import { fetch_repos } from "./actionCreators";

test("Fetch Repos", () => {
  expect(fetch_repos()).toMatchObject({ type: "FETCH_REPOS" });
});
