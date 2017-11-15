import React from 'react';
import TodoListContainer from './todos/todo_list_container';

class App extends React.Component {
  render () {
    return (
      <div>
        <TodoListContainer />
      </div>
    );
  }
}

export default App;
