import { combineReducers } from 'redux';
import * as NavigationReducers from './navigation';
import * as PostsReducers from './posts';

export default combineReducers(Object.assign(
  NavigationReducers,
  PostsReducers,
));
