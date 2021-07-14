const { UrgentTask } = require('../Structural/Decorator/urgentTask');
const { ObserverList } = require('./Observer/observer');
const Mediator = require('./Mediator/mediator');

const TaskSubject = function (data) {
  UrgentTask.call(this, data);
  this.observers = new ObserverList();
};

TaskSubject.prototype = Object.create(UrgentTask.prototype);

TaskSubject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
}

TaskSubject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer, 0));
}

TaskSubject.prototype.notifyObserver = function (context) {
  const observerCount = this.observers.count();
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i)(context);
  };
}

TaskSubject.prototype.save = function () {
  this.notifyObserver(this);
  UrgentTask.prototype.save.call(this);
}

TaskSubject.prototype.ping = function () {
  Mediator.publish('ping', this);
}

module.exports = TaskSubject;