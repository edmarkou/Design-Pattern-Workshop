const Repo = require('../Module/taskRepository');

class Task {
  constructor(data) {
    this.name = data.name;
    this.completed = false;
  };

  complete() {
    Repo.complete(this);
    Repo.save(this);
  };

  save() {
    Repo.save(this);
  };
};

module.exports = Task;