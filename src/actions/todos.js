import uuid from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
  todo: {
    done: false,
    id: uuid.v4(),
    text,
  },
  type: ADD_TODO,
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
  id,
  type: TOGGLE_TODO,
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = id => ({
  id,
  type: REMOVE_TODO,
});
