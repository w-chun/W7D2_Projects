import React from 'react';
import allTodos from '../../reducers/selectors';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
import { fetchTodos } from '../../actions/todo_actions';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        { todos.map((todo, i) => (
          <TodoListItem key={ i } todo={ todo } />
        ))}
        <TodoForm createTodo={ this.props.createTodo }/>
      </ul>
    );
  }
}

export default TodoList;


// <li key={ i }>{ todo.title }</li>
