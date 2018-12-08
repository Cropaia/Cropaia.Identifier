import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  @ViewChild('places') places: GooglePlaceDirective;
  @ViewChild('search') public searchElement: ElementRef;

  lat: number = -33.785809;
  lng: number = 151.121195;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }


  public handleAddressChange(address: any) {
    console.log(address.geometry.location.lng());
    console.log(address.geometry.location.lat());
    console.log(address.geometry.location.toJSON());
    console.log(address.geometry.viewport.getNorthEast());
    this.lng = address.geometry.location.lng();
    this.lat = address.geometry.location.lat();
  }

  ngOnInit() {

  }
}
