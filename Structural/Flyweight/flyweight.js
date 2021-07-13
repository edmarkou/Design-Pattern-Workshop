const Flyweight = function (project, priority, user) {
  this.priority = priority;
  this.project = project;
  this.user = user;
};

const FlyweightFactory = function () {
  const flyweights = {};
  let count = 0;
  const get = (project, priority, user) => {
    if (!flyweights[project + priority + user]) {
      flyweights[project + priority + user] = new Flyweight(project, priority, user);
      count++;
    }
    return flyweights[project + priority + user];
  }
  const getCount = () => count;

  return {
    get,
    getCount
  };
};

module.exports = FlyweightFactory();