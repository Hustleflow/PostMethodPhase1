import './App.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { useState } from 'react';
import { useEffect } from 'react';




const App = () => {

const [task, setTask] = useState("");

const [taskList, setTaskList] = useState([]);

const getApi = async () =>{
  const res = await axios.get('http://localhost:3007/tasks');
    // console.log(res.data);
      setTaskList(res.data);
}

useEffect ( () => {
    getApi()
}, []);



const animal = "bullshit";

const sendInput = async () => {
  await axios.post('http://localhost:3007/tasks', {task});
  setTaskList([...taskList, {task}]);
  setTask('');
}


const handlePress = (keypress) => {
  if (keypress.key === 'Enter') {
    sendInput();
  }
}

  return (
    <div className="App container p-4">
      <div>
        <h1>weird div</h1>
        <img src="https://picsum.photos/200/300" alt="random"/>

        <h2>Task List</h2>
        <ul>
          {taskList.map((task) => (

            <li>{task.task}</li>

          ))}
        </ul>

        <input type="text" value={task} placeholder="type `something" onChange={(event) => setTask(event.target.value)} onKeyDownCapture={(event) => handlePress(event)}/>
        <button className="btn btn-primary" onClick={() => sendInput() } disabled={task === '' || !task}>Click me</button>
      </div>

    </div>
  );
};

export default App;