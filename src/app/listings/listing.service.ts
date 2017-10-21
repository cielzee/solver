import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//rxjs promises cause angular http return observable natively.
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListingService {
  constructor(private http: Http) {}
  getListings(): Promise<any> {
    return this.http.get("https://www.reddit.com/r/aww/new.json")
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(err => err);
  }
  getComments(id: any): Promise<any> {
    let url = "https://www.reddit.com/r/aww/comments/" + id + "/new.json";
    return this.http.get(url)
    .toPromise()
    .then(response => {
      return response.json();
    })
    .catch(err => err);
  }
}
