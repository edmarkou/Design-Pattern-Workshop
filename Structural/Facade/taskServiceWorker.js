const ServiceWorker = function () {
  return {
    setCompletionDate: function (task) {
      task.completionDate = new Date();
    },
    notifyFinishedTask: function (task) {
      console.log(`Task has been finished at: ${task.completionDate}`);
    }
  }
}();

const ServiceWorkerWrapper = function () {
  const completeAndNotify = function (task) {
    task.complete();
    if (task.complete) {
      ServiceWorker.setCompletionDate(task);
      ServiceWorker.notifyFinishedTask(task);
    }
  }

  return {
    completeAndNotify
  }
};

module.exports = ServiceWorkerWrapper();