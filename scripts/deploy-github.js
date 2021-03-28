const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'git@github.com:chrhein/chrhein.github.io.git',
  },
  () => {
    console.log('Deploy Complete!');
  },
);
