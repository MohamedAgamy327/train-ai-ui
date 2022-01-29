import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PageTitleService, CalcService } from 'src/app/core/services';

@Component({
  selector: 'app-bin-variables',
  templateUrl: './bin-variables.component.html',
  styleUrls: ['./bin-variables.component.css']
})
export class BinVariablesComponent implements OnInit {

  dataVariables: any;
  binningAnalysis: any;

  dataVariablesColumns = ['variable', 'type', 'missing', 'unique', 'binAs', 'manual'];
  binningAnalysisColumns = ['variable', 'bin', 'obs#', 'obs%', 'binValue', 'target', 'trend', 'iv'];

  dataVariablesSource: MatTableDataSource<any>;
  binningAnalysisSource: MatTableDataSource<any>;

  public binRadioCtrl: FormControl = new FormControl('BinOnlyMissing');
  public maxNumCtrl: FormControl = new FormControl(5);
  public binNumCtrl: FormControl = new FormControl(2);
  public lowerCheckboxCtrl: FormControl = new FormControl();
  public upperCheckboxCtrl: FormControl = new FormControl();
  public binCheckboxCtrl: FormControl = new FormControl(true);
  public maxNum2Ctrl: FormControl = new FormControl(20);
  public datetimeCheckboxCtrl: FormControl = new FormControl(true);
  public missingNumCtrl: FormControl = new FormControl(60);
  public uniqueNumCtrl: FormControl = new FormControl(2);

  constructor(
    private pageTitleService: PageTitleService,
    private calcService: CalcService) { }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Bin Variables');
    this.dataVariables = JSON.parse(localStorage.getItem("binVar") || "[]");
    this.binningAnalysis = JSON.parse(localStorage.getItem("binAnalysis") || "[]");
    this.refreshDataVariables();
    this.refreshDataBinningAnalysis();
    if (this.dataVariables.length == 0)
      this.calculateBinVariables(JSON.parse(localStorage.getItem("data") || "[]"))
  }

  refreshDataVariables() {
    this.dataVariablesSource = new MatTableDataSource(this.dataVariables);
  }

  refreshDataBinningAnalysis() {
    this.binningAnalysisSource = new MatTableDataSource(this.binningAnalysis);
  }

  calculateBinVariables(model: any) {
    this.calcService.calculateBinVariables(model).subscribe(
      (res: any) => {
        this.dataVariables = res;
        localStorage.setItem("binVar", JSON.stringify(this.dataVariables));
        this.refreshDataVariables();
      });
  }

  calculateBinAnalysis() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data = data.map(function (item) {
      delete item.probability;
      return item;
    });
    const model = {
      data: data,
      target: localStorage.getItem('target')
    };

    this.calcService.calculateBinAnalysis(model).subscribe(
      (res: any) => {
        this.binningAnalysis = res;
        localStorage.setItem("binAnalysis", JSON.stringify(this.binningAnalysis));
        this.refreshDataBinningAnalysis();
      });
  }

  binVariablesOkButton() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data = data.map(function (item) {
      delete item.probability;
      return item;
    });
    const model = {
      data: data,
      binAnalysis: JSON.parse(localStorage.getItem("binAnalysis") || "[]")
    };
    console.log(model);

    this.calcService.binVariablesOkButton(model).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem("data", JSON.stringify(res));
      });
  }


}
