const Task = require('../../Creational/Constructor/task');
const FlyweightFactory = require('../Flyweight/flyweight');

const FlyweightUrgentTask = function (urgentTaskData) {
  const taskData = { name: urgentTaskData.name, completed: urgentTaskData.completed };
  Task.call(this, taskData);
  const { project, user, priority } = urgentTaskData;
  this.flyweight = FlyweightFactory.get(project, user, priority);
};
// this creates a new object for the prototype without being linked to the Task.prototype
FlyweightUrgentTask.prototype = Object.create(Task.prototype);

FlyweightUrgentTask.prototype.notify = function () {
  console.log('Notifying important people');
};

FlyweightUrgentTask.prototype.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};

const UrgentTask = function (urgentTaskData) {
  const taskData = { name: urgentTaskData.name, completed: urgentTaskData.completed };
  Task.call(this, taskData);
  this.project = urgentTaskData.project;
  this.user = urgentTaskData.user;
  this.priority = urgentTaskData.priority;
};
// this creates a new object for the prototype without being linked to the Task.prototype
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
  console.log('Notifying important people');
};

UrgentTask.prototype.save = function () {
  this.notify();
  Task.prototype.save.call(this);
};

module.exports = { UrgentTask, FlyweightUrgentTask };