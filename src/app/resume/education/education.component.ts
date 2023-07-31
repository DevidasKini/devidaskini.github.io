import { GridOptions,Module, ClientSideRowModelModule } from '@ag-grid-enterprise/all-modules';
import { Component, OnInit } from '@angular/core';
import { ROWDATA } from 'src/app-constant';
import { DatashareService } from '../service/datashare.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public modules!: Module[];
  public gridOptions!: GridOptions;
  public defaultColDef: any;

  public columnDefs = [
    {
      colId: '0',
      headerName: "Degree",
      cellClass: "ag-checkcell",
      minWidth: 130,
      flex: 1,
      field: 'degree'
    },
    {
      colId: '1',
      headerName: "Course Name",
      cellClass: "ag-checkcell",
      minWidth: 200,
      flex: 1,
      field: 'course'
    },
    {
      colId: '2',
      headerName: "From",
      cellClass: "ag-checkcell",
      minWidth: 130,
      flex: 1,
      field: 'from', 
      sortable: true
    },
    {
      colId: '3',
      headerName: "To",
      cellClass: "ag-checkcell",
      minWidth: 130,
      flex: 1,
      field: 'to', 
      sortable: true
    },
    {
      colId: '4',
      headerName: "University/Institute",
      cellClass: "ag-checkcell",
      minWidth: 220,
      flex: 1,
      field: 'university'
    },
    {
      colId: '5',
      headerName: "Specialization",
      cellClass: "ag-checkcell",
      minWidth: 150,
      flex: 1,
      field: 'specialization'
    },
    {
      colId: '6',
      headerName: "CGPA/Marks Obtained",
      cellClass: "ag-checkcell",
      minWidth: 130,
      flex: 1,
      field: 'marks'
    },
    {
      colId: '7',
      headerName: "Percentage",
      cellClass: "ag-checkcell",
      minWidth: 130,
      flex: 1,
      field: 'percentage'
    }
  ]

  public rowData = ROWDATA;
  constructor(private dataShare: DatashareService) { }

  ngOnInit(): void {
    this.modules = [ClientSideRowModelModule];
    this.gridOptions = {
      sortingOrder: ['asc', 'desc', ''],
      columnDefs: this.columnDefs
    }
    this.defaultColDef = {
      floatingFilter: false,
      floatingFilterComponentParams: { suppressFilterButton: true},
      suppressMenu: true,
      autoHeight: true,
      wrapText: true,
      headerClass: "headerClass"
    }
    this.dataShare.userData.subscribe((params: any)=>{
      console.log(params);
    })
  }

  onGridReady(params: any) {
  }

}
