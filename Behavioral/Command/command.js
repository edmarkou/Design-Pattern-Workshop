const CommandRepo = function () {
  this.tasks = {};
  this.commands = [];
};

CommandRepo.prototype.save = function (task) {
  console.log(`Saving ${task.name} task to db`);
  this.tasks[task.name] = task;
}
CommandRepo.prototype.complete = function (task) {
  console.log(`Completing task: ${task.name}`);
  task.completed = true;
  this.save(this);
}
CommandRepo.prototype.execute = function (name) {
  const args = Array.prototype.slice.call(arguments, 1);

  this.commands.push({ name, obj: args[0] });

  if (this[name]) {
    return this[name].apply(this, args);
  }
  return false;
}
CommandRepo.prototype.executeNoLog = function (name) {
  const args = Array.prototype.slice.call(arguments, 1);
  if (this[name]) {
    return this[name].apply(this, args);
  }
  return false;
}
CommandRepo.prototype.replay = function () {
  for (let i = 0; i < this.commands.length; i++) {
    const command = this.commands[i];
    this.executeNoLog(command.name, command.obj);
  }
}

module.exports = new CommandRepo();