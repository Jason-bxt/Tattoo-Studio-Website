import { Component } from '@angular/core';
import { AboutStudioComponent } from "./about-studio/about-studio.component";
import { CeoComponent } from "./ceo/ceo.component";
import { ReviewComponent } from "./review/review.component";



@Component({
  selector: 'app-homepage',
  imports: [AboutStudioComponent, CeoComponent, ReviewComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
