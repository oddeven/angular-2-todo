import {Injectable} from 'angular2/core';
import {ReplaySubject, Observable} from 'rxjs/Rx';

export class TodoItem {
  constructor(private title: String, private done: Boolean) {}
}

let data: Array<TodoItem> = [
  new TodoItem('Clean the house', false),
  new TodoItem('Check latest JS news', true)
];

@Injectable()
export class DataStore {
  private subject: ReplaySubject<Array<TodoItem>> = new ReplaySubject(1);

  constructor() {
    setTimeout(() => this.subject.next(data), 0);
  }

  get observable(): Observable<Array<String>> {
    return <Observable<Array<String>>> this.subject;
  }

  addItem(title: String, done: Boolean) {
    data = data.slice();
    data.push(new TodoItem(title, done));
    this.subject.next(data);
  }

  removeItem(item: TodoItem) {
    data = data.slice();
    data.splice(data.indexOf(item), 1);
    this.subject.next(data);
  }

  updateItem(item: TodoItem, title: String, done: Boolean) {
    data = data.slice();
    data[data.indexOf(item)] = new TodoItem(title, done);
    this.subject.next(data);
  }
}
