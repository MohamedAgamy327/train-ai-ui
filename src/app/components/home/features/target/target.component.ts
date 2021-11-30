import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FileValidators } from 'ngx-file-drag-drop';
import { PageTitleService, CoreService, PlaceHolderService, UploadService } from 'src/app/core/services';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  isLoading: boolean;
  fileFormData: FormData;
  data: any;

  constructor(
    private pageTitleService: PageTitleService,
    private uploadService: UploadService,
    private placeHolderService: PlaceHolderService) { }

  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  onValueChange(file: File[]) {
    if (file && file.length > 0) {

      this.fileFormData = new FormData();
      const reader = new FileReader();
      reader.readAsDataURL(file[0]);
      this.fileFormData.append('upload-file', file[0], file[0].name);
      this.upload(this.fileFormData);
      this.isLoading = true;
    }
    else {
      this.isLoading = false;
    }

    // if (this.isLoading) {
    //   this.placeHolderService.getTableTabContent().
    //     subscribe((res: any) => {
    //       this.data = res.expenseCategory;
    //       console.log(this.data);
    //     },
    //       err => console.log(err),
    //       () => this.data
    //     );
    // }
  }
  ngOnInit(): void {
    this.pageTitleService.setTitle('Target');
    this.fileControl.valueChanges.subscribe(() =>
      console.log(this.fileControl.value, this.fileControl.valid)
    );
  }


  upload(file: any) {
    this.uploadService.upload(file).subscribe(
      (res: any) => {
        this.data = res;
      });
  }

  getHeaders() {
    let headers: string[] = [];
    if (this.data) {
      this.data.forEach((value) => {
        Object.keys(value).forEach((key) => {
          if (!headers.find((header) => header == key)) {
            headers.push(key)
          }
        })
      })
    }
    return headers;
  }

}
