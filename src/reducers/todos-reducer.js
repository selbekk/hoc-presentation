import * as actions from '../actions';

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case actions.SET_TODOS: {
      return [
        ...state,
        ...action.todos,
      ];
    }
    case actions.ADD_TODO: {
      return [
        ...state,
        action.todo,
      ];
    }
    case actions.TOGGLE_TODO: {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    }
    case actions.REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.id);
    }
    default: {
      return state;
    }
  }
}
