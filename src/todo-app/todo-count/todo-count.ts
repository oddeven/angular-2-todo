import {Component, Inject, ChangeDetectionStrategy, ChangeDetectorRef} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import template from './todo-count.html!text';
import {DataStore} from '../../store/data-store';

@Component({
  selector: 'todo-count',
  template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoCount {
  open: Observable<Number>;
  done: Observable<Number>;

  constructor(@Inject(DataStore) dataStore: DataStore, @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef) {
    function countMapFactor(done: Boolean) {
      return (data) => {
        cdr.markForCheck();
        return data.filter((todo) => todo.done === done).length;
      };
    }

    this.open = dataStore.observable.map(countMapFactor(false));
    this.done = dataStore.observable.map(countMapFactor(true));
  }
}
