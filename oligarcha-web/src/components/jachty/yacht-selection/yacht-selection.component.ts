import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Yacht } from 'src/models/yacht';
import { YachtService } from './yacht.service';

@Component({
  selector: 'app-yacht-selection',
  templateUrl: './yacht-selection.component.html',
  styleUrls: ['./yacht-selection.component.scss']
})
export class YachtSelectionComponent implements OnInit, OnChanges {

 @Input() yachtCategory: number;
  yachts: Yacht[];

  constructor(private yachtService: YachtService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['yachtCategory'] && changes['yachtCategory'].currentValue) {
      this.getYachts(changes['yachtCategory'].currentValue);
    }
  }

  ngOnInit(): void {
  }

  getYachts(yachtType: number) {
    this.yachtService.getYachtsByType(yachtType).subscribe( y => {
      console.log(y);
      this.yachts = y
    } );
  }

}
