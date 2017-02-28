import * as actions from '../actions';
import * as server from '../api/server';

export const getTodos = () => async (dispatch) => {
  const todos = await server.getTodos();
  dispatch(actions.setTodos(todos));
};
export const addTodo = text => dispatch => dispatch(actions.addTodo(text));
export const toggleTodo = id => dispatch => dispatch(actions.toggleTodo(id));
export const removeTodo = id => dispatch => dispatch(actions.removeTodo(id));
