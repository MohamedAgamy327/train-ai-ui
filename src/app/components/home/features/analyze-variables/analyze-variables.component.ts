import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageTitleService, CoreService, PlaceHolderService } from 'src/app/core/services';

@Component({
  selector: 'app-analyze-variables',
  templateUrl: './analyze-variables.component.html',
  styleUrls: ['./analyze-variables.component.css']
})
export class AnalyzeVariablesComponent implements OnInit {

  tableTabData: any;
  invoicelist: any;
  taxrates: any;
  addtickets: any;

  displayedInvoiceColumns: string[] = ['id', 'clientName', 'accountType', 'dateCreated', 'dueDate', 'amount'];
  displayedTaxColumns: string[] = ['date', 'account', 'type', 'amount', 'credit', 'balance'];

  displayedAddTicketsColumns: string[] = ['srno', 'ticketCode', 'subject', 'date', 'department', 'status',];

  constructor(private pageTitleService: PageTitleService,
    private translate: TranslateService,
    private service: CoreService,
    private placeHolderService: PlaceHolderService) { }

  ngOnInit(): void {

    this.pageTitleService.setTitle('Analyze Variables');

    this.placeHolderService.getInvoiceListContent().
      subscribe(res => { this.invoicelist = res },
        err => console.log(err),
        () => this.invoicelist
      );

    this.placeHolderService.getTaxRateList().
      subscribe(res => { this.taxrates = res },
        err => console.log(err),
        () => this.taxrates
      );

    this.placeHolderService.getTicketList().
      subscribe(res => { this.addtickets = res },
        err => console.log(err),
        () => this.addtickets
      );
  }

}
