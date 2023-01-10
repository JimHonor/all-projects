import repos from "./repos.json";

export const getProjects = () => {
  const GITHUB_REPO_BASE_URL = "https://github.com/JimHonor/";
  const GITHUB_PAGE_BASE_URL = "https://jimhonor.github.io/";

  return repos.map((repo, index) => {
    const name = repo
      .split("-")
      .map((str) => str.replace(/^./, str.charAt(0).toUpperCase()))
      .join(" ");

    const id = `00${index + 1}`.slice(-3);

    return {
      id,
      name,
      repoName: repo,
      githubRepoUrl: GITHUB_REPO_BASE_URL + repo,
      githubPageUrl: GITHUB_PAGE_BASE_URL + repo,
    };
  });
};
