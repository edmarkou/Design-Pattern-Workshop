const TaskSubject = require('./taskSubject');
const { NotificationService, LoggingService, AuditService } = require('./Observer/observer');
const Mediator = require('./Mediator/mediator');
const CommandRepo = require('./Command/command');

const task1 = new TaskSubject({ name: 'task1', priority: 1, user: 'John', project: 'project1' });

const notification = new NotificationService();
const logging = new LoggingService();
const audit = new AuditService();

// Observer pattern
task1.addObserver(notification.update);
task1.addObserver(logging.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(audit.update);

task1.save();

// Mediator pattern
Mediator.subscribe('ping', notification, notification.update);
Mediator.subscribe('ping', logging, logging.update);
Mediator.subscribe('ping', audit, audit.update);

task1.ping();

// Command pattern
CommandRepo.execute('save', { name: 'task1', priority: 1, user: 'John', project: 'project1' });
CommandRepo.execute('save', { name: 'task2', priority: 2, user: 'Alex', project: 'project2' });
CommandRepo.execute('save', { name: 'task3', priority: 3, user: 'Pam', project: 'project3' });
CommandRepo.execute('save', { name: 'task4', priority: 4, user: 'Luke', project: 'project4' });

console.log(CommandRepo.tasks);
CommandRepo.tasks = {};
console.log(CommandRepo.tasks);
CommandRepo.replay();
console.log(CommandRepo.tasks);
