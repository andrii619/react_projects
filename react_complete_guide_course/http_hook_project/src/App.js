import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './components/hooks/use-http';

function App() {
  console.log("app");
  const [tasks, setTasks] = useState([]);

  /*const transformTasks = useCallback( (taskObj) => {
    const loadedTasks = [];
    for(const taskKey in taskObj)
    {
      loadedTasks.push({id: taskKey, text: taskObj[taskKey].text});
    }
    // can still use setTask cuz javascript will use context and that function address doesnt change with reloads
    setTasks(loadedTasks);
  }, []);*/
  const transformTasks = (taskObj) => {
    const loadedTasks = [];
    for(const taskKey in taskObj)
    {
      loadedTasks.push({id: taskKey, text: taskObj[taskKey].text});
    }
    // can still use setTask cuz javascript will use context and that function address doesnt change with reloads
    setTasks(loadedTasks);
    console.log(loadedTasks);
  };

  //const requestConfig = ;
  const {isLoading, error, sendRequest:fetchTasks} = useHttp();

  //console.log("data ", isLoading, error, fetchTasks);
  useEffect(() => {


    //console.log("before request")
     fetchTasks({
      url: "https://react-test-7bc77-default-rtdb.firebaseio.com/tasks.json", method: "GET"
    }, transformTasks)
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
