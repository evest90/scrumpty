import React from 'react';
import { Link } from 'react-router-dom';
import { StatusCode } from '../../../lib/shared';
import Task from './Task.jsx';

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tasks: props.tasks };
    this.reload = props.reload;
  }

  componentWillReceiveProps({ tasks }) {
    this.setState({ tasks });
  }

  render() {
    const tasks = this.state.tasks;
    if (tasks.length === 0)
      {return (<div></div>);}

    return (
      <div>
        {tasks.map(task => <Task reload= { this.reload }  key={'task:' + task.id} task={task} />)}
      </div>
    );
  }
}

export default Tasks;