import { StoreService } from './../../shared/store.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-current-geoloc',
  templateUrl: './current-geoloc.component.html',
  styleUrls: ['./current-geoloc.component.css']
})

export class CurrentGeolocComponent {

  constructor(
    private storeService: StoreService
  ) {}

  getGeoLoc(): void {
    if(!navigator.geolocation) {
      alert('Geolokacja nie jest dostępna w twojej przeglądarce');
    } else {
      navigator.geolocation.getCurrentPosition( pos => {
        this.storeService.getWeather({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      }, () => alert('Błąd uzyskania geolokacji') );
    }
  }
}
