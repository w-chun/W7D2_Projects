import React from 'react';

export const getTodos = () => {
  return $.ajax({
    url: '/api/todos',
    type: 'GET'
  });
};

export const postTodo = (todo) => {
  return $.ajax({
    url: '/api/todos/',
    type: 'POST',
    data: { todo }
  });
};
