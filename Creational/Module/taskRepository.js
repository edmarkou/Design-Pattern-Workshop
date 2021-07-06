const singleton = require('../Singleton/singleton');

const Repo = () => {
  let db = {};

  const get = (id) => {
    console.log(`Getting task: ${id}`);
    return {
      name: id
    }
  };

  const save = (task) => {
    console.log(`Saving ${task.name} task to db`);
    singleton.save();
    db[task.name] = task;
  }

  const complete = (task) => {
    console.log(`Completing task: ${task.name}`);
    task.completed = true;
  }
  return {
    get,
    save,
    complete
  }
};

module.exports = Repo();