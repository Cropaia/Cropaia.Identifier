import { Component, OnInit, ViewChild, ElementRef, NgZone} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';


declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  //  //set google maps defaults
  //  this.zoom = 4;
  //  this.latitude = 39.8282;
  //  this.longitude = -98.5795;

  //  //create search FormControl
  //  this.searchControl = new FormControl();

  //  //set current position
  //  this.setCurrentPosition();

  //  //load Places Autocomplete
  //  this.mapsAPILoader.load().then(() => {
  //    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //      types: ["address"]
  //    });
  //    autocomplete.addListener("place_changed", () => {
  //      this.ngZone.run(() => {
  //        //get the place result
            
  //        let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //        //verify result
  //        if (place.geometry === undefined || place.geometry === null) {
  //          return;
  //        }

  //        //set latitude, longitude and zoom
  //        this.latitude = place.geometry.location.lat();
  //        this.longitude = place.geometry.location.lng();
  //        this.zoom = 12;
  //      });
  //    });
  //  });
  }

  //private setCurrentPosition() {
  //  if ("geolocation" in navigator) {
  //    navigator.geolocation.getCurrentPosition((position) => {
  //      this.latitude = position.coords.latitude;
  //      this.longitude = position.coords.longitude;
  //      this.zoom = 12;
  //    });
  //  }
  //}

  ////////////////////////////////////////////////////////

   private initAutocomplete() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -33.8688, lng: 151.2195 },
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function () {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function () {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function (marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function (place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

}
