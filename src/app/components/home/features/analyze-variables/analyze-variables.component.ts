import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PageTitleService, PlaceHolderService } from 'src/app/core/services';

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
  correlationColumns = ['variable', 'bin', 'obs#', 'obs%', 'binValue', 'target', 'trend', 'iv'];

  distributionSource: MatTableDataSource<any>;
  volatilitySource: MatTableDataSource<any>;
  correlationSource: MatTableDataSource<any>;

  public mostNumCtrl: FormControl = new FormControl();
  public informationNumCtrl: FormControl = new FormControl();
  public absNumCtrl: FormControl = new FormControl();
  public binnedCheckboxCtrl: FormControl = new FormControl();

  constructor(
    private pageTitleService: PageTitleService) {
    this.refreshDistribution();
    this.refreshVolatility();
    this.refreshCorrelation();
  }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Analyze Variables');
  }

  refreshDistribution() {
    this.distributionSource = new MatTableDataSource(this.distribution);
  }

  refreshVolatility() {
    this.volatilitySource = new MatTableDataSource(this.volatility);
  }

  refreshCorrelation() {
    this.correlationSource = new MatTableDataSource(this.correlation);
  }

}
