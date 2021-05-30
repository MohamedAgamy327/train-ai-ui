import { BreadcrumbService } from 'ng5-breadcrumb';
import { Component, OnInit } from '@angular/core';
import { CoreService, CredentialService } from 'src/app/core/services';
import { PageTitleService } from 'src/app/core/services/page-title.service';

declare var require;
const screenfull = require('screenfull');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isFullscreen = false;
  header: string;

  constructor(
    private coreService: CoreService,
    private pageTitleService: PageTitleService,
    public credentialService: CredentialService,
    private breadcrumbService: BreadcrumbService
  ) {
    this.addBreadcrumb();
  }

  addBreadcrumb() {
    this.breadcrumbService.addFriendlyNameForRoute('/home', 'Home');
  }

  ngOnInit(): void {
    this.pageTitleService.title.subscribe((val: string) => {
      this.header = val;
    });
  }

  toggleSidebar() {
    this.coreService.sidenavOpen = !this.coreService.sidenavOpen;
  }

  toggleFullscreen() {
    screenfull.toggle();
    this.isFullscreen = !this.isFullscreen;
  }

  logout() {
    this.credentialService.logout();
  }

}
