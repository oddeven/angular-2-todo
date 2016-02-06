import {Component, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy} from 'angular2/core';

import template from './enter-todo.html!text';
import './enter-todo.scss!scss';

@Component({
  selector: 'enter-todo',
  host: {
    class: 'enter-todo'
  },
  template,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterTodo {
  title: String;
  @Output() todoAdded: EventEmitter = new EventEmitter();
  @ViewChild('titleElement') titleElement: ElementRef;

  updateTitle(title) {
    this.title = title;
  }

  addTodo() {
    this.todoAdded.next(this.title);
    this.title = this.titleElement.nativeElement.textContent = '';
  }
}
