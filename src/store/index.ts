import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer, IRootState } from './reducers/index';
export default function store(): Store<IRootState> {
  return {
    ...createStore(rootReducer, applyMiddleware(thunk))
  };
}
