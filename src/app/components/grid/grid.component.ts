import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Column } from '@store/models';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent {
  @Input() columns: Array<Column> = [];
  @Input() gridData: Array<any> = [];

  @Output() public onTitleClick: EventEmitter<string> = new EventEmitter<string>();

  public onCellClick(event) {
    // if (event.column.field === 'Title') {
      this.onTitleClick.emit(event.dataItem.Episode);
    // }
  }
}
