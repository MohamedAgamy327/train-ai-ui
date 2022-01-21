import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { TranslateService } from '@ngx-translate/core';
import { PageTitleService, CoreService, PlaceHolderService } from 'src/app/core/services';

@Component({
  selector: 'app-bin-variables',
  templateUrl: './bin-variables.component.html',
  styleUrls: ['./bin-variables.component.css']
})
export class BinVariablesComponent implements OnInit {

  dataVariables: any;
  binningAnalysis: any;

  dataVariablesColumns = ['type', 'missing', 'unique', 'binAs', 'manual'];
  binningAnalysisColumns = ['variable', 'bin', 'obs#', 'obs%', 'binValue', 'target', 'trend', 'iv'];

  dataVariablesSource: MatTableDataSource<any>;
  binningAnalysisSource: MatTableDataSource<any>;

  public binRadioCtrl: FormControl = new FormControl('BinOnlyMissing');
  public maxNumCtrl: FormControl = new FormControl();
  public binNumCtrl: FormControl = new FormControl();
  public lowerCheckboxCtrl: FormControl = new FormControl();
  public upperCheckboxCtrl: FormControl = new FormControl();
  public binCheckboxCtrl: FormControl = new FormControl();
  public maxNum2Ctrl: FormControl = new FormControl();
  public datetimeCheckboxCtrl: FormControl = new FormControl();
  public missingNumCtrl: FormControl = new FormControl();
  public uniqueNumCtrl: FormControl = new FormControl();

  constructor(
    private pageTitleService: PageTitleService) { }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Bin Variables');
    this.refreshDataVariables();
    this.refreshDataBinningAnalysis();
    const data = JSON.parse(localStorage.getItem("data") || "[]");
  }


  refreshDataVariables() {
    this.dataVariablesSource = new MatTableDataSource(this.dataVariables);
  }

  refreshDataBinningAnalysis() {
    this.binningAnalysisSource = new MatTableDataSource(this.binningAnalysis);
  }

}
