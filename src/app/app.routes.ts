import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ArtistsComponent } from './artists/artists.component';
import { CollectionComponent } from './collection/collection.component';
import { QualitysComponent } from './qualitys/qualitys.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'Home', component: HomepageComponent },
  { path: 'Artists', component: ArtistsComponent },
  { path: 'Collection', component: CollectionComponent },
  { path: 'Qualitys', component: QualitysComponent },
  { path: 'Contact', component: ContactComponent },
];
