import {Component, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {DataStore} from '../store/data-store';

import template from './todo-app.html!text';
import './todo-app.scss!scss';

@Component({
  selector: 'todo-app',
  template,
  host: {
    class: 'todo-app'
  },
  providers: [DataStore]
})
export class TodoApp {
  todos: Observable<Array<String>>;

  constructor(@Inject(DataStore) private dataStore: DataStore) {
    this.todos = dataStore.observable;
  }
}
