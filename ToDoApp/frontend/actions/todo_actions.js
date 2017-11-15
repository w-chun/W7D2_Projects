import { getTodos, postTodo } from '../util/todo_api_util';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos = []) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo: todo
});

export const fetchTodos = () => (dispatch) => {
  return getTodos().then(
    (todos) => dispatch(receiveTodos(todos))
  );
};

export const createTodo = (newTodo) => (dispatch) => {
  return postTodo(newTodo).then(
    (todo) => dispatch(receiveTodo(todo))
  );
};
