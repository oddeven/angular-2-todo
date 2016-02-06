import {Component, Input} from 'angular2/core';
import {TodoItem} from '../store/data-store';

import template from './todo-list.html!text';
import './todo-list.scss!scss';

@Component({
  selector: 'todo-list',
  host: {
    class: 'todo-list'
  },
  template
})
export class TodoList {
  @Input() todoList: Array<TodoItem>;
}
