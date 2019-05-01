import { combineReducers } from 'redux';
import teachers from './teachers';
import courses from './courses';
import links from './links';

export default combineReducers({
  teachers,
  courses,
  links
});
