import { Component, OnInit } from '@angular/core';
import { BackendConnector } from './services/backendconnector.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'flickr-fixfirst';
  
  flickr_response: any;
  searchText: string = "";

  constructor(
    private backendCon_service: BackendConnector,
  ) { }


  ngOnInit() {
    this.backendCon_service.flickr_photos();

    this.backendCon_service.getFlickr_photos.subscribe(
      (flickr_photos: any) => {
        this.flickr_response = flickr_photos.feed.entry; 
      });
  }

}
