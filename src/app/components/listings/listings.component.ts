import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  title = 'ListingsComponent';
  listings: any;
  constructor(private firebaseService: FirebaseService) {

  }

  ngOnInit() {
    this.firebaseService.getListings()
      .subscribe(listings => {
        console.log('listings', listings);
        this.listings = listings;
      })
  }
}
