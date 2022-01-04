import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() selectionEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(option: number) {
    this.selectionEvent.emit(option);
  }

}
