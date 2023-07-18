import './App.css';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { useState } from 'react';




const App = () => {

const [task, setTask] = useState("");

const [taskList, setTaskList] = useState([]);


const getApi = async () =>{
  const res = await axios.get('http://localhost:3007');
    console.log(res.data);
}
  
getApi();


const animal = "bullshit";

const sendInput = async () => {
  await axios.post('http://localhost:3007/tasks', {animal});
}

  return (
    <div className="App container p-4">
      <div>
        <h1>weird div</h1>
        <img src="https://picsum.photos/200/300" alt="random"/>
        <input type="text" placeholder="type something" onChange={(event) => setTask(event.target.value)}/>
        <button className="btn btn-primary" onClick={() => sendInput() }>Click me</button>
      </div>

    </div>
  );
};

export default App;