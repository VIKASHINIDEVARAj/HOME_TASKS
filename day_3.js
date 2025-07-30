let taskList = [];

    const addTask = (task, callback) => {
      taskList.push(task);
      callback();
    };

    const printTasks = function () {
      console.log("Tasks:");
      taskList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    };

    function addMultipleTasks(...tasks) {
      tasks.forEach(task => taskList.push(task));
      console.log("Multiple tasks added.");
    }

    let outsideVariable = "I'm outside a function";

    function showScope() {
      let insideVariable = "I'm inside a function";
      console.log(outsideVariable);
      console.log(insideVariable);
    }

    addTask("Record Writing", printTasks);
    addTask("Assignments", printTasks);
    addMultipleTasks("Buy groceries", " jogging", "Read book");
    printTasks();
    showScope();
 