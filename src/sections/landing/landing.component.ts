import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddNewModalComponent } from '@core/components/add-new/add-new.component';
import { ToDoItem } from '@core/models/todo-item.model';
import { ToDoItemService } from '@core/services/todo.service';

@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [MatButtonModule, MatDialogModule],
})
export class LandingComponent {
  constructor(private dialog: MatDialog, private todoService: ToDoItemService) {}

  addNew = () => {
    this.dialog.open(AddNewModalComponent).afterClosed().pipe(take(1)).subscribe((data: Omit<ToDoItem, 'id'>) => {
      this.todoService.addItem(data)
    });
  };
}
