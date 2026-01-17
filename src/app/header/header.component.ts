import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [ RouterModule],
  templateUrl: './header.component.html',
  styleUrls:[ './header.component.scss', './header-responsive.component.scss' ]
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/Home']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goToArtists() {
    this.router.navigate(['/Artists']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goToCollection() {
    this.router.navigate(['/Collection']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goToContact() {
    this.router.navigate(['/Contact']).then(() => {
      window.scrollTo(0, 0);
    });
  }
  goToQualitys() {
    this.router.navigate(['/Qualitys']).then(() => {
      window.scrollTo(0, 0);
    });
  }
}
