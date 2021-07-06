const singleton = require('../Singleton/singleton');

const Repo = () => {
  let db = {};

  const get = (id) => {
    console.log(`Getting project: ${id}`);
    return {
      name: id
    }
  };

  const save = (project) => {
    console.log(`Saving ${project.name} project to db`);
    db[project.name] = project;
    singleton.save();
  };

  return {
    get,
    save
  }
};

module.exports = Repo();