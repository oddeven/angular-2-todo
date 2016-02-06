import {Component, Inject} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import template from './todo-count.html!text';
import {DataStore} from '../../store/data-store';

@Component({
  selector: 'todo-count',
  template
})
export class TodoCount {
  open: Observable<Number>;
  done: Observable<Number>;

  constructor(@Inject(DataStore) dataStore: DataStore) {
    this.open = dataStore.observable.map((data) => data.filter((todo) => !todo.done).length);
    this.done = dataStore.observable.map((data) => data.filter((todo) => todo.done).length);
  }
}
