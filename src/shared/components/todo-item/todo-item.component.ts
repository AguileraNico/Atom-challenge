import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: 'app-to-do-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class ToDoItem {

  @Input() item: any;
}