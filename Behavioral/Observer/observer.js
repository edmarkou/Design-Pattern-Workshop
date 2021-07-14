const NotificationService = function () {
  this.update = function (task) {
    console.log(`Notifying ${task.user} about task ${task.name}`);
  }
};

const LoggingService = function () {
  this.update = function (task) {
    console.log(`Logging ${task.user} about task ${task.name}`);
  }
};

const AuditService = function () {
  this.update = function (task) {
    console.log(`Auditing ${task.user} about task ${task.name}`);
  }
};

function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj);
}

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
  return null;
}

ObserverList.prototype.removeAt = function (index) {
  if (index > -1 && index < this.observerList.length) {
    this.observerList.splice(index, 1);
  }
}

ObserverList.prototype.count = function () {
  return this.observerList.length;
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex;
  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
}

module.exports = { ObserverList, NotificationService, LoggingService, AuditService };