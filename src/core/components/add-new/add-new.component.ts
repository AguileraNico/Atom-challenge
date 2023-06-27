import { Component } from "@angular/core";
import { ToDoItem, TODO_STATUS } from "src/core/models/todo-item.model";

@Component({
  standalone: true,
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss']
})
export class AddNewModal {

  status = TODO_STATUS;

  data!: Omit<ToDoItem,'id'>;
}