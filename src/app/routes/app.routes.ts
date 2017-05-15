import { Routes } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ListingsComponent } from '../components/listings/listings.component';
import { AddListingComponent } from '../components/add-listing/add-listing.component';

export const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'listings', component: ListingsComponent },
  { path: 'add-listing', component: AddListingComponent }
];
