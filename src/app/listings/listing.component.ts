import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Listing } from './listing';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'listing-post',
  template: `
  <div *ngIf="listing" class="listing-post">
    <md-card>
      <div class="listing-basics" fxFlex fxLayoutAlign="start center" (click)="selectListing(listing)">
        <div class="listing-thumbnail"><img src={{listing.thumbnail}}/></div>
        <p class="listing-title">{{listing.title}}</p>
      </div>
    </md-card>
  </div>
  `,
  styleUrls: ['listing.scss'],
})
export class ListingComponent {
  @Input() listing: Listing;
  @Output() viewComments = new EventEmitter<Listing>();

  selectListing(listing: Listing) {
    this.viewComments.next(listing);
  }
}
