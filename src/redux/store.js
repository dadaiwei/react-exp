import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import immutable from 'immutability-helper';
import { INCREMENT, DECREMENT, RESET } from './actionTypes';

const initialState = {
  count: 0,
  name: 'dada'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return immutable(state, {
        count: {
          $set: state.count + 1
        }
      });
    case DECREMENT:
      return immutable(state, {
        count: {
          $set: state.count - 1
        }
      });
    case RESET:
      return immutable(state, {
        count: {
          $set: 0
        }
      });
    default: 
      return state;      
  }
};

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

export default store;