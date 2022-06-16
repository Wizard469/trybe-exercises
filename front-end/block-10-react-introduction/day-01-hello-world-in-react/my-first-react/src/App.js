import './App.css';
import { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const TaskList = ['Go to the gym', 'Go to the shopping mall', 'Relax at home', 'Sleep at 8:00pm'];

class App extends Component {
  render() {
    return (
      <ul>{TaskList.map((task) => Task(task))}</ul>
    );
  };
};


export default App;
