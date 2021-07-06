const TaskRepo = function () {
  let called = 0;
  const save = function () {
    called++;
    console.log(`Save has been called ${called} times.`)
  }
  console.log('Newing up task repo');
  return {
    save
  }
};

// this creates a single instance since the function is called when you are importing the function
module.exports = TaskRepo();