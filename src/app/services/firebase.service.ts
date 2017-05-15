import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Listing } from '../models/listing.model';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<Listing[]>;
  constructor(private af: AngularFireDatabase) { }


  getListings() {
    this.listings = this.af.list('/listings') as FirebaseListObservable<Listing[]>;
    return this.listings;
  }
}
