import {Component} from 'angular2/core';

import template from './todo-app.html!text';
import './todo-app.scss!scss';

@Component({
  selector: 'todo-app',
  template,
  host: {
    class: 'todo-app'
  }
})
export class TodoApp {}
