import {Component} from '@angular/core';
import {MdIconRegistry, MdDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

import 'rxjs/add/operator/filter';
import {DialogComponent} from './dialog/dialog.component';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {ListingService} from './listings/listing.service';
import {Listing} from './listings/listing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListingService],
})

export class AppComponent {
  filters: {};
  isDarkTheme = false;
  listings: Listing[];
  selectedListing: Listing;
  p: number = 1;

  constructor(private listingService: ListingService, private router: Router, private route: ActivatedRoute) {

    this.listingService.getListings().then(listings => this.listings = listings.data.children.map(function(listing) {
      return listing.data;
    })
    )
  }

  back(): void {
      this.selectedListing = null;
  }

  viewComments(listing): void {
    this.selectedListing = listing;
  }
}
