import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  yachtCategory: number;

  constructor() { }

  ngOnInit(): void {
  }

  getCategory(option: number) {
    this.yachtCategory = option;
  }

}
