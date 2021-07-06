const Repo = require('../Module/taskRepository');

const Task = function (data) {
  this.name = data.name;
  this.completed = false;
};

Task.prototype.complete = function () {
  Repo.complete(this);
  Repo.save(this);
};

Task.prototype.save = function () {
  Repo.save(this);
};

module.exports = Task;