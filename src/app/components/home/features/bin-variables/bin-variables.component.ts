import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PageTitleService, CoreService, PlaceHolderService } from 'src/app/core/services';

@Component({
  selector: 'app-bin-variables',
  templateUrl: './bin-variables.component.html',
  styleUrls: ['./bin-variables.component.css']
})
export class BinVariablesComponent implements OnInit {

  tradeHistory: any;
  coinList: any;
  tradeHistoryColumns = ['currency', 'txnno', 'status', 'price', 'total'];
  cryptoCompareColumns = ['serial_number', 'desktop_name', 'mobile_name', 'price', 'volume', 'tag', 'total_volume', 'market_cap', 'circulating_supply', 'chart', 'change'];


  // Exchange Statistics
  statisticConfig = { slidesToShow: 1, fade: true, slidesToScroll: 1, arrows: false, dots: false, autoplay: true, autoplaySpeed: 2000 };



  constructor(private pageTitleService: PageTitleService,
    private translate: TranslateService,
    private service: CoreService,
    private placeHolderService: PlaceHolderService) { }

  ngOnInit(): void {
    this.pageTitleService.setTitle('Bin Variables');

    this.placeHolderService.getTradeHistoryContent().
      subscribe(res => { this.tradeHistory = res },
        err => console.log(err),
        () => this.tradeHistory
      );

    this.placeHolderService.getCoinList().
      subscribe(res => { this.coinList = res },
        err => console.log(err)
      );
  }




}
