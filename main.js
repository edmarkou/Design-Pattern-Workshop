const Task = require('./Creational/Constructor/task');
const Project = require('./Creational/Constructor/project');
const RepoFactory = require('./Creational/Factory/repoFactory');

const task1 = new Task(RepoFactory.task.get('task1'));
const task2 = new Task(RepoFactory.task.get('task2'));
const user1 = RepoFactory.user.get('user1');
const project1 = new Project(RepoFactory.project.get('project1'));

task1.user = user1;
task1.project = project1;
task1.save();
task1.complete();
project1.save();
task2.save();