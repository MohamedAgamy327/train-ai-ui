import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FileValidators } from 'ngx-file-drag-drop';
import { PageTitleService, CalcService } from 'src/app/core/services';
import { ExcelService } from 'src/app/core/services/excel.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit, AfterViewInit {

  fileFormData: FormData;
  columns: Array<any>;
  displayedColumns: Array<any>;
  @ViewChild('paginator') paginator: MatPaginator;
  columnsList: string[];
  public chooseColumnCtrl: FormControl = new FormControl();
  dataSource: MatTableDataSource<any>;
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  constructor(
    private pageTitleService: PageTitleService,
    private excelService: ExcelService,
    private calcService: CalcService) {
    this.onChosenColumnChange();
  }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Target');
  }


  ngAfterViewInit(): void {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    if (data.length > 0) {
      this.setDataToTable(data);
    }
  }

  onChosenColumnChange(): void {
    this.chooseColumnCtrl.valueChanges.subscribe((value) => {
      if (value) {
        localStorage.setItem('target', value);
        if (!this.displayedColumns.find(d => d == 'probability')) {
          let data = JSON.parse(localStorage.getItem("data") || "[]");
          data = data.map(obj => ({ probability: null, ...obj }));
          this.setDataLocalStorage(data);
          this.columns.unshift({
            columnDef: 'probability',
            header: 'probability',
            cell: (element: any) => `${element['probability'] ? element['probability'] : ``}`
          });

          this.displayedColumns = this.columns.map(c => c.columnDef);
        }

        const index = this.displayedColumns.findIndex(d => d == value);
        this.displayedColumns.splice(index, 1);
        this.displayedColumns.splice(1, 0, value);
      }
    });
  }

  onValueChange(file: File[]) {
    if (file && file.length > 0) {
      this.fileFormData = new FormData();
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      this.fileFormData.append('upload-file', file[0], file[0].name);
      this.upload(this.fileFormData);
    }
    else {
      this.dataSource = null;
    }
  }

  upload(file: any) {
    this.calcService.upload(file).subscribe(
      (res: any) => {
        localStorage.removeItem('data');
        localStorage.removeItem('binVar');
        localStorage.removeItem('target');
        this.setDataToTable(res);
        this.setDataLocalStorage(res);
      });
  }

  setDataToTable(data: any) {
    const columns = data
      .reduce((columns: any, row: any) => {
        return [...columns, ...Object.keys(row)]
      }, [])
      .reduce((columns: any, column: any) => {
        return columns.includes(column)
          ? columns
          : [...columns, column]
      }, []);
    this.columns = columns.map(column => {
      return {
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column] != null ? element[column] : ``}`
      }
    })
    this.displayedColumns = this.columns.map(c => c.columnDef);
    this.columnsList = this.columns.filter(d => d.columnDef != 'probability').map(c => c.columnDef);
    this.chooseColumnCtrl.setValue(localStorage.getItem('target'));
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
  }

  exportAsXLSX(): void {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    this.excelService.exportAsExcelFile(data, 'Data');
  }

  setDataLocalStorage(data: any) {
    localStorage.setItem("data", JSON.stringify(data));
  }



}
