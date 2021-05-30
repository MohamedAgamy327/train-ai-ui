import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { FileValidators } from 'ngx-file-drag-drop';
import { PageTitleService, CoreService, PlaceHolderService } from 'src/app/core/services';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  isLoading: boolean;

  constructor(
    private pageTitleService: PageTitleService,
    private translate: TranslateService,
    private service: CoreService,
    private placeHolderService: PlaceHolderService) { }

  tableTabData: any;
  displayedTransactionColumns: string[] = ['transid', 'date', 'account', 'type', 'amount', 'debit', 'credit', 'balance'];
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  onValueChange(file: File[]) {
    if (file && file.length > 0) {
      this.isLoading = true;
    }
    else {
      this.isLoading = false;
    }

    if (this.isLoading) {
      this.placeHolderService.getTableTabContent().
        subscribe(res => { this.tableTabData = res },
          err => console.log(err),
          () => this.tableTabData
        );
    }
  }
  ngOnInit(): void {
    this.pageTitleService.setTitle('Target');
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log(this.fileControl.value, this.fileControl.valid)
    );
  }

}
