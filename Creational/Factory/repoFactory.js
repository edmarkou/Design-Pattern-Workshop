const repoFactory = function () {
  const repos = this;
  const repoList = [
    { name: 'task', source: '../Module/taskRepository' },
    { name: 'user', source: '../Module/userRepository' },
    { name: 'project', source: '../Module/projectRepository' }
  ];

  repoList.forEach(function (repo) {
    repos[repo.name] = require(repo.source);
  });
}

module.exports = new repoFactory;