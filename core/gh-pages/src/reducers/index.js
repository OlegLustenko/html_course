import { combineReducers } from 'redux';
import classWorksReducer from './classwork-reducer';
import homeWorksReducer from './homework-reducer';

const rootReducer = combineReducers({
  classWorks: classWorksReducer,
  homeWorks: homeWorksReducer
  // books: BooksReducer,
  // activeBook: ActiveBookReducer
});

export default rootReducer;