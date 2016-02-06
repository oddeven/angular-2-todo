import {Component, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {DataStore, TodoItem} from '../store/data-store';
import {TodoList} from './todo-list/todo-list';

import template from './todo-app.html!text';
import './todo-app.scss!scss';

@Component({
  selector: 'todo-app',
  template,
  host: {
    class: 'todo-app'
  },
  providers: [DataStore],
  directives: [TodoList]
})
export class TodoApp {
  todos: Observable<Array<String>>;

  constructor(@Inject(DataStore) private dataStore: DataStore) {
    this.todos = dataStore.observable;
  }

  onTodoUpdated(updates: {todo: TodoItem, title: String, done: Boolean}) {
    this.dataStore.updateItem(updates.todo, updates.title, updates.done);
  }
}
