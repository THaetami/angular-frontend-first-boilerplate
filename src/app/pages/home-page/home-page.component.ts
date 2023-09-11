import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(
    private sidebarService: SidebarService
  ) { }

  toggleSidebarIfOpen() {
    this.sidebarService.toggleSidebarIfOpen();
  }

}
