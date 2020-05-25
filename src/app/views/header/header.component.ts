import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;

  constructor(
    private router: Router,
    private authenticateService: AuthenticateService
  ) {
    this.authenticateService.currentUser.subscribe(user => this.currentUser = user);
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticateService.logout();
    this.router.navigate(['/login']);
  }
}
