export const scrubGithubResponse = (dataArr) => {
  return dataArr
    .map(satnitiseGithubResponse)
    .filter((a) => a && a)
    .sort((a, b) => b.tags.length - a.tags.length);
};

const satnitiseGithubResponse = (data) => {
  if (data.fork == false) {
    return {
      project_name: data.name,
      project_description: data.description,
      tags: data.topics,
      link: data.homepage,
      stars: data.stargazers_count,
      watchers: data.watchers_count,
      code: data.html_url,
    };
  }
};
