import * as actions from '../actions';

export const addTodo = text => dispatch => dispatch(actions.addTodo(text));
export const toggleTodo = id => dispatch => dispatch(actions.toggleTodo(id));
export const removeTodo = id => dispatch => dispatch(actions.removeTodo(id));
