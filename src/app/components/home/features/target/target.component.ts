import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FileValidators } from 'ngx-file-drag-drop';
import { PageTitleService, UploadService } from 'src/app/core/services';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  fileFormData: FormData;
  columns: Array<any>;
  displayedColumns: Array<any>;
  dataSource: any;

  public chooseColumnCtrl: FormControl = new FormControl();

  constructor(
    private pageTitleService: PageTitleService,
    private uploadService: UploadService) {
    this.onChosenColumnChange();
  }

  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  onChosenColumnChange(): void {
    this.chooseColumnCtrl.valueChanges.subscribe((value) => {
      if (value) {


        this.dataSource = this.dataSource.map(obj => ({ ...obj, probability: null }));

        this.columns.unshift({
          columnDef: 'probability',
          header: 'probability',
          cell: (element: any) => `${element['probability'] ? element['probability'] : ``}`
        });

        this.displayedColumns = this.columns.map(c => c.columnDef);

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

  ngOnInit(): void {
    this.pageTitleService.setTitle('Target');
  }

  upload(file: any) {
    this.uploadService.upload(file).subscribe(
      (res: any) => {
        const columns = res
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
            cell: (element: any) => `${element[column] ? element[column] : ``}`
          }
        })
        this.displayedColumns = this.columns.map(c => c.columnDef);
        this.dataSource = res.slice(0, 100);
      });
  }

}
