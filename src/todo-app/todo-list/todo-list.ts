import {Component, Input} from 'angular2/core';
import {TodoListItem} from './todo-list-item/todo-list-item';
import {TodoItem} from '../store/data-store';

import template from './todo-list.html!text';
import './todo-list.scss!scss';

@Component({
  selector: 'todo-list',
  host: {
    class: 'todo-list'
  },
  template,
  directives: [TodoListItem]
})
export class TodoList {
  @Input() todoList: Array<TodoItem>;
}
