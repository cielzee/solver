import { Component, Input, OnInit } from '@angular/core';

import { Listing } from './listing';
import {ListingService } from './listing.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'listing-comments',
  template: `
  <div class="listing-post">
  <md-card>
    <div class="listing-basics" fxFlex fxLayoutAlign="start center" (click)="selectListing(listing)">
      <div class="listing-thumbnail"><img src={{listing.thumbnail}}/></div>
      <p class="listing-title">{{listing.title}} ({{listing.num_comments}})</p>
    </div>
  </md-card>
    <div *ngIf="comments">
      <div *ngFor="let comment of comments">
        <md-card class="listing-comment">
          {{comment.body}}
        </md-card>
      </div>
    </div>
    <div *ngIf="!comments || comments && comments.length == 0">
      <md-card class="listing-comment">no comments</md-card>
    </div>
  </div>
  `,
  styleUrls: ['listing.scss'],
  providers: [ListingService],
})
export class ListingCommentsComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() listing: Listing;


  constructor(private router: Router, private listingService: ListingService, private route: ActivatedRoute) {
    // console.log(this.listing.id);


  }

  ngOnInit() {
    console.log("comment view rendered");
    console.log(this.listing.id);
    this.listingService.getComments(this.listing.id + "").then(comments => this.comments = comments[1].data.children.map(function(comment) {
      return comment.data;
    }));
  }
}
