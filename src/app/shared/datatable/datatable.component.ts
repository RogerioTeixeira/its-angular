import { Component, OnInit, Input } from '@angular/core';
import { DataTableOptions } from 'src/app/api/datatable-options';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {
  @Input()
  public lista: any[]

  @Input()
  public options: DataTableOptions;

  @Input()
  selectionMode: string;

  public currentIndex: boolean[] = [];
  constructor() { }

  ngOnInit() {
  }

  select(index: number) {
    if (this.selectionMode == 'single') {
      if (this.currentIndex[index]) {
        this.currentIndex[index] = false
      } else {
        this.currentIndex = []
        this.currentIndex[index] = !this.currentIndex[index];
      }
    } else if (this.selectionMode == 'multiple') {
      this.currentIndex[index] = !this.currentIndex[index];
    }
  }


}
