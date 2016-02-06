import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {TodoListItem} from './todo-list-item/todo-list-item';
import {TodoItem, DataStore} from '../store/data-store';

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
  @Output() todoUpdated: EventEmitter = new EventEmitter();
  @Output() todoDeleted: EventEmitter = new EventEmitter();

  onTodoUpdated(todo: TodoItem, updates: {title: String, done: Boolean}) {
    this.todoUpdated.next({
      todo,
      title: updates.title,
      done: updates.done
    });
  }

  onTodoDeleted(todo: TodoItem) {
    this.todoDeleted.next(todo);
  }
}
