import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

class Student {
  id: number;
  name: string;
  emel: string;
  website: string;
}

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dtOptions: any = {};
  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      ajax: 'http://localhost/startbootstrapapi/index.php/api/get',
      columns: [{
        title: 'ID',
        data: 'id'
      }, 
      {
        title: 'Name',
        data: 'name'
      }, 
      {
        title: 'Emel',
        data: 'emel'
      }, 
      {
        title: 'Website',
        data: 'website'
      }],
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel'
      ]
    }
  }

  // ngOnInit(): void {
  //   const that = this;
  //   this.dtOptions = {
  //     destroy: true,
  //     pagingType: 'full_numbers',
  //     pageLength: 2,
  //     serverSide: true,
  //     // processing: true,
  //     ajax: (dataTablesParameters: any, callback) => {
  //       that.http
  //         .post<DataTablesResponse>(
  //           'http://localhost/startbootstrapapi/index.php/api/get',
  //           dataTablesParameters, {}
  //         ).subscribe(resp => {
  //           that.students = resp.data;

  //           callback({
  //             recordsTotal: resp.recordsTotal,
  //             recordsFiltered: resp.recordsFiltered,
  //             data: []
  //           });
  //         });
  //     },
  //     columns: [{ data: 'id' }, { data: 'name' }, { data: 'emel' }, { data: 'website' }],
  //     dom: 'Bfrtip',
  //     buttons: [
  //       'copy',
  //       'print',
  //       'excel',
  //       'csv'
  //     ]
  //   };
  // }

}
