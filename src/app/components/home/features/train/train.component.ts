import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CalcService, PageTitleService } from 'src/app/core/services';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {

  public manualCtrl: FormControl = new FormControl(22.00);
  public binRadioCtrl: FormControl = new FormControl();

  panelVars: any;
  varProperty: any;
  kpisVariables: any;
  collaborationVariables: any;

  panelVarsColumns = ['variable', 'include_exclude', 'manually_set'];
  varPropertyColumns = ['property', 'value'];
  kpisVariablesColumns = ['kpi', 'value'];
  collaborationVariablesColumns = ['calibration_criterion', 'value'];

  panelVarsSource: MatTableDataSource<any>;
  varPropertySource: MatTableDataSource<any>;
  kpisVariablesSource: MatTableDataSource<any>;
  collaborationVariablesSource: MatTableDataSource<any>;

  constructor(
    private pageTitleService: PageTitleService,
    private calcService: CalcService
  ) { }

  ngOnInit() {
    this.pageTitleService.setTitle("Train Variables");

    this.refreshPanelVars();
    this.refreshVarProperty();
    this.refreshKpisVariables();
    this.refreshCollaborationVariables();
    this.trainScreen();
  }

  refreshPanelVars() {
    this.panelVarsSource = new MatTableDataSource(this.panelVars);
  }

  refreshVarProperty() {
    this.varPropertySource = new MatTableDataSource(this.varProperty);
  }

  refreshKpisVariables() {
    this.kpisVariablesSource = new MatTableDataSource(this.kpisVariables);
  }

  refreshCollaborationVariables() {
    this.collaborationVariablesSource = new MatTableDataSource(this.collaborationVariables);
  }

  trainScreen() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    let binAnalysis = JSON.parse(localStorage.getItem("binAnalysis") || "[]");
    let target = localStorage.getItem("target");
    let invalidVars = JSON.parse(localStorage.getItem("invalidVars") || "[]");
    let modelQualifiedVarLabels = JSON.parse(localStorage.getItem("modelQualifiedVarLabels") || "[]");

    data = data.map(function (item: any) {
      delete item.probability;
      return item;
    });

    const model = {
      data: data,
      invalidVars: invalidVars,
      modelQualifiedVarLabels: modelQualifiedVarLabels,
      binAnalysis: binAnalysis,
      target: target
    };

    this.calcService.trainScreen(model).subscribe(
      (res: any) => {
        this.panelVars = JSON.parse(res.panelVars);
        this.varProperty = JSON.parse(res.varProperty);
        this.refreshPanelVars();
        this.refreshVarProperty();
      });

  }

  trainData() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    let binVar = JSON.parse(localStorage.getItem("binVar") || "[]");
    let target = localStorage.getItem("target");
    let invalidVars = JSON.parse(localStorage.getItem("invalidVars") || "[]");
    let modelQualifiedVarLabels = JSON.parse(localStorage.getItem("modelQualifiedVarLabels") || "[]");

    data = data.map(function (item: any) {
      delete item.probability;
      return item;
    });

    const model = {
      data: data,
      modelQualifiedVarLabels: modelQualifiedVarLabels,
      invalidVars: invalidVars,
      binVar: binVar,
      target: target
    };

    this.calcService.trainData(model).subscribe(
      (res: any) => {
        console.log(res);
        console.log(JSON.parse(res.rankingVariables));
        console.log(JSON.parse(res.distributionVariables));
        this.kpisVariables = JSON.parse(res.kpisVariables);
        this.refreshKpisVariables();
        this.collaborationVariables = JSON.parse(res.collaborationVariables);
        this.refreshCollaborationVariables();
      });

  }


  trainDataOk() {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    let binVar = JSON.parse(localStorage.getItem("binVar") || "[]");
    let target = localStorage.getItem("target");
    let invalidVars = JSON.parse(localStorage.getItem("invalidVars") || "[]");
    let modelQualifiedVarLabels = JSON.parse(localStorage.getItem("modelQualifiedVarLabels") || "[]");

    data = data.map(function (item: any) {
      delete item.probability;
      return item;
    });

    const model = {
      data: data,
      modelQualifiedVarLabels: modelQualifiedVarLabels,
      invalidVars: invalidVars,
      binVar: binVar,
      target: target
    };

    this.calcService.trainDataOk(model).subscribe(
      (res: any) => {
        localStorage.setItem("data", JSON.stringify(res));
      });

  }

}
