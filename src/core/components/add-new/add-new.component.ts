import { Component } from '@angular/core';
import { ToDoItem, TODO_STATUS } from 'src/core/models/todo-item.model';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

@Component({
  standalone: true,
  selector: 'app-add-new-task',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
  // imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, MatInputModule],
})
export class AddNewModalComponent {
  // status = Object.values(TODO_STATUS);

  // data!: Omit<ToDoItem, 'id'>;
}
