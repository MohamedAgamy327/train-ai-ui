import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CalcService, PageTitleService } from 'src/app/core/services';

@Component({
  selector: 'app-analyze-variables',
  templateUrl: './analyze-variables.component.html',
  styleUrls: ['./analyze-variables.component.css']
})
export class AnalyzeVariablesComponent implements OnInit {

  distribution: any;
  volatility: any;
  correlation: any;

  distributionColumns = ['variable', 'include', 'manual', 'minimum', 'percentile1', 'percentile5', 'percentile10', 'percentile25', 'percentile50', 'percentile75', 'percentile90', 'percentile95', 'percentile99', 'maximum'];
  volatilityColumns = ['variable', 'include', 'manual', 'std', 'average', 'mostCommonValue'];

  correlationColumns: Array<any>;
  displayedCorrelationColumns: Array<any>;

  distributionSource: MatTableDataSource<any>;
  volatilitySource: MatTableDataSource<any>;
  correlationSource: MatTableDataSource<any>;

  public mostNumCtrl: FormControl = new FormControl();
  public informationNumCtrl: FormControl = new FormControl();
  public absNumCtrl: FormControl = new FormControl();
  public binnedCheckboxCtrl: FormControl = new FormControl();

  constructor(
    private pageTitleService: PageTitleService,
    private calcService: CalcService) {
    this.refreshDistribution();
    this.refreshVolatility();
  }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Analyze Variables');
    this.variableAnalyze();
  }

  refreshDistribution() {
    this.distributionSource = new MatTableDataSource(this.distribution);
  }

  refreshVolatility() {
    this.volatilitySource = new MatTableDataSource(this.volatility);
  }

  variableAnalyze() {

    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data = data.map(function (item) {
      delete item.probability;
      return item;
    });
    const model = {
      data: data,
      target: localStorage.getItem('target')
    };


    this.calcService.variableAnalyze(model).subscribe(
      (res: any) => {
        this.distribution = JSON.parse(res.distributionVariable);
        this.refreshDistribution();
        this.volatility = JSON.parse(res.volatileVariable);
        this.refreshVolatility();

        this.setCorrelationToTable(JSON.parse(res.correlationVariable));
        localStorage.setItem("invalidVars", JSON.stringify(res.invalidVars));
      });
  }


  setCorrelationToTable(data: any) {
    const columns = data
      .reduce((columns: any, row: any) => {
        return [...columns, ...Object.keys(row)]
      }, [])
      .reduce((columns: any, column: any) => {
        return columns.includes(column)
          ? columns
          : [...columns, column]
      }, []);
    this.correlationColumns = columns.map(column => {
      return {
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column] != null ? element[column] : ``}`
      }
    });
    this.displayedCorrelationColumns = this.correlationColumns.filter(f => f.header != 'include_exclude_panel').map(c => c.columnDef);
    this.correlationSource = new MatTableDataSource(data);
  }

  public convert(data: any) {
    if (Number(data))
      return (Number(data) * 100).toFixed(0) + '%';
    else
      return data;
  }

  variableAnalyzeOk() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    let invalidVars = JSON.parse(localStorage.getItem("invalidVars") || "[]");

    data = data.map(function (item) {
      delete item.probability;
      return item;
    });

    const model = {
      data: data,
      invalidVars: invalidVars
    };

    this.calcService.variableAnalyzeOk(model).subscribe(
      (res: any) => {
        localStorage.setItem("data", JSON.stringify(res));
      });

  }

}
