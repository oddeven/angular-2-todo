import {Component, Input} from 'angular2/core';
import {TodoItem} from '../../store/data-store';
import template from './todo-list-item.html!text';
import './todo-list-item.scss!scss';

@Component({
  selector: 'todo-list-item',
  host: {
    class: 'todo-list-item'
  },
  template
})
export class TodoListItem {
  @Input() todo: TodoItem;
}
