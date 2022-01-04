import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Yacht } from 'src/models/yacht';
import { BookingPopupComponent } from '../booking-popup/booking-popup.component';

@Component({
  selector: 'app-yacht-panel',
  templateUrl: './yacht-panel.component.html',
  styleUrls: ['./yacht-panel.component.scss']
})
export class YachtPanelComponent implements OnInit {

  @Input() yacht: Yacht;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClick(e: any) {
    console.log(e);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(BookingPopupComponent, {
      width: '450px',
      height: '600px',
      data: {idJacht: this.yacht.id}
    });
}
}
