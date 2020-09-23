import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-renderer-grid',
  templateUrl: './cell-renderer-grid.component.html',
  styleUrls: ['./cell-renderer-grid.component.scss']
})
export class CellRendererGridComponent implements OnInit {
  public params;
  public label;
  constructor() { }

  ngOnInit(): void {
  }

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  public onClick(event): any {
    if (this.params.onClick instanceof Function) {
      const params = {
        rowData: this.params.node.data,
        label: this.params.label
      };
      this.params.onClick(params);

    }
  }

}
