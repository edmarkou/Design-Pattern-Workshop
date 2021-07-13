const { UrgentTask, FlyweightUrgentTask } = require('./Decorator/urgentTask');
const TaskServiceWorker = require('./Facade/taskServiceWorker');

const task1 = new UrgentTask({ name: 'task1', priority: 1, user: 'John', project: 'project1' });
const task2 = new UrgentTask({ name: 'task2', priority: 2, user: 'Mark', project: 'project2' });

TaskServiceWorker.completeAndNotify(task1);
task2.save();

const TaskCollection = function () {
  const tasks = {};
  let count = 0;
  const add = (data) => {
    tasks[data.name] = new UrgentTask(data);
    count++;
  };
  const addFlyweight = (data) => {
    tasks[data.name] = new FlyweightUrgentTask(data);
    count++;
  };
  const getCount = () => count;
  const get = (name) => tasks[name];

  return {
    add,
    addFlyweight,
    getCount,
    get
  };
};

const tasks = new TaskCollection();

const priorities = [1, 2, 3, 4, 5];
const projects = ['none', 'course', 'training', 'project'];
const users = ['Jon', 'Erica', 'Mark', 'Nathan'];

const initialMemory = process.memoryUsage().heapUsed;
for (let i = 0; i < 100000; i++) {
  tasks.add({
    name: `task${i}`,
    priority: priorities[Math.floor(Math.random() * 5)],
    project: projects[Math.floor(Math.random() * 4)],
    user: users[Math.floor(Math.random() * 4)]
  });
};
const afterMemory = process.memoryUsage().heapUsed;
console.log(`Used memory: ${(afterMemory - initialMemory) / 1000000}`);
console.log(tasks.getCount());


const flyweightTasks = new TaskCollection();
const initialFlyweightMemory = process.memoryUsage().heapUsed;
for (let i = 0; i < 100000; i++) {
  flyweightTasks.addFlyweight({
    name: `task${i}`,
    priority: priorities[Math.floor(Math.random() * 5)],
    project: projects[Math.floor(Math.random() * 4)],
    user: users[Math.floor(Math.random() * 4)]
  });
};
const afterFlyweightMemory = process.memoryUsage().heapUsed;
console.log(`Used memory: ${(afterFlyweightMemory - initialFlyweightMemory) / 1000000}`);
console.log(flyweightTasks.getCount());

