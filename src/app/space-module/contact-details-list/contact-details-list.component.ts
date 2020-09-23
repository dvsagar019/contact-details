import { Component, OnInit } from '@angular/core';
import { GridInputData, GridConfigData } from '../model/config-grid';
import { CellRendererGridComponent } from '../cell-renderer/cell-renderer-grid/cell-renderer-grid.component';

@Component({
  selector: 'app-contact-details-list',
  templateUrl: './contact-details-list.component.html',
  styleUrls: ['./contact-details-list.component.scss']
})
export class ContactDetailsListComponent implements OnInit {

public gridConfig: any;
public dataServiceMappingInput: any;
public rowData: any;
public columnDefs;
public gridOptions;
public gridApi;


public frameworkComponents: any;

  constructor() {
    this.frameworkComponents = {
      buttonRenderer: CellRendererGridComponent,
    };
    this.getGridConfigurationData();
  }


  ngOnInit(): void {
  }


  public getGridConfigurationData(): any {

    this.rowData = GridInputData;

    this.columnDefs = [
      { headerName: 'Contact Id', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Email', field: 'email' },
      {
        headerName: 'Edit',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onEditButton.bind(this),
          label: 'Edit'
        }
      },
      {
        headerName: 'Delete',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onDeleteButton.bind(this),
          label: 'Delete'
        }
      }
    ];
  }

  public onEditButton(event): void {
    const person = prompt('Please enter your Email', event.rowData.email);
    this.rowData.forEach(element => {
      element.name = person;
    });
    this.refreshGrid();
  }


  public onDeleteButton(event): void {
    this.rowData.forEach(item => item.id !== event.rowData.id);
    this.refreshGrid();
  }

  public refreshGrid(): void {
  }

  public onGridReady(params): any {
    this.gridApi = params.api;
  }


}
