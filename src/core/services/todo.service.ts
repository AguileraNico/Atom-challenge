import { Injectable, signal, Signal } from '@angular/core';
import { map } from 'rxjs';
import { Observable, toObservable, filter } from 'rxjs/observable';
import { ToDoItem, TODO_STATUS } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoItemService {
  private items: ToDoItem[] = [];
  private items$ = signal<ToDoItem[]>(this.items);

  getItems = () => this.items$.asReadonly();

  getItemsByStatus = (status: TODO_STATUS) =>
    toObservable(this.items$).pipe(
      map((item: ToDoItem[]) => item.filter((el) => el.status === status))
    );

  addItem = (item: Omit<ToDoItem, 'id'>) => {
    this.items.push({
      ...item,
      id: this.items.length,
    });
    this.items$.set(this.items);
  };

  updateItem = (item: ToDoItem) => {
    const index = this.items.findIndex((el) => el.id === item.id);
    if (index !== -1) {
      this.items[index] = item;
      this.items$.next(this.items);
    }
  };
}
