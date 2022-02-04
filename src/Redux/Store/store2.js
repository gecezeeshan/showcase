import { createStore } from 'redux';
import { reducer } from './Redux/Reducers/Reducer';
export const store = createStore(reducer);