import {Component} from '@angular/core';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { ToDoItemService } from '@core/services/todo.service';
import { ToDoItem, TODO_STATUS } from '@core/models/todo-item.model';

@Component({
  standalone: true,
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss'],
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class ToDoTableComponent {
  todo = this.todoService.getItemsByStatus(TODO_STATUS.PENDING);

  done = this.todoService.getItemsByStatus(TODO_STATUS.COMPLETED);

  active = this.todoService.getItemsByStatus(TODO_STATUS.IN_PROGRESS);

  constructor(private todoService: ToDoItemService) {}

  drop(event: CdkDragDrop<ToDoItem[]>) {
    if (event.previousContainer !== event.container) {
      this.todoService.updateItem({
        ...event.item,
        status: event.container as TODO_STATUS
      })
    }
  }
}
}