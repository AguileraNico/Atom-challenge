import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddNewModal } from 'src/core/components/add-new/add-new.component';

@Component({
  standalone: true,
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [MatButtonModule, MatDialogModule],
})
export class LandingComponent {
  constructor(private dialog: MatDialog) {}

  addNew = () => {
    this.dialog.open(AddNewModal);
  };
}
