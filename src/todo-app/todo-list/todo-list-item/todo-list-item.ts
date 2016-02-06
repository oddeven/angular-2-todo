import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItem} from '../../store/data-store';
import template from './todo-list-item.html!text';
import './todo-list-item.scss!scss';

@Component({
  selector: 'todo-list-item',
  host: {
    class: 'todo-list-item'
  },
  template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItem {
  editMode: Boolean;
  editedTitle: String;
  @Input() todo: TodoItem;
  @Output() todoUpdated: EventEmitter = new EventEmitter();
  @Output() todoDeleted: EventEmitter = new EventEmitter();

  toggleEditMode() {
    this.editMode = !this.editMode;

    if (!this.editMode && this.editedTitle) {
      this.todoUpdated.next({
        title: this.editedTitle,
        done: this.todo.done
      });
      this.editedTitle = null;
    }
  }

  editTitle(title: String) {
    this.editedTitle = title;
  }

  deleteItem() {
    this.todoDeleted.next();
  }

  toggleDone() {
    this.todoUpdated.next({
      title: this.todo.title,
      done: !this.todo.done
    });
  }
}
