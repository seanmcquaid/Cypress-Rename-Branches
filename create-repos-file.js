const fs = require('fs');

// create these files using:
// curl "https://api.github.com/users/seanmcquaid/repos?type=sources&per_page=100&page=1" > page1.json

const allTheThings = [...require('./page1.json'), ...require('./page2.json')];

const desiredRepos = allTheThings
  .filter(
    (b) =>
      !b.fork && !b.archived && !b.disabled && b.default_branch === 'master'
  )
  .map((b) => b.html_url);

// write the relevant repos to ./repos.json
fs.writeFileSync('./repos.json', JSON.stringify(desiredRepos, null, 2));
