import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';

import {AppComponent} from './app.component';
import {DialogComponent} from './dialog/dialog.component';
import { ListingComponent } from './listings/listing.component';
import { ListingCommentsComponent } from './listings/listing-comments.component';
import { RouterModule, Routes } from '@angular/router';

import 'hammerjs';

const appRoutes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: AppComponent },
  { path: 'comments/:id', component: ListingCommentsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    ListingComponent,
    ListingCommentsComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
