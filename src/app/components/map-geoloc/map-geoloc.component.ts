import { StoreService } from './../../shared/store.service';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map-geoloc',
  templateUrl: './map-geoloc.component.html',
  styleUrls: ['./map-geoloc.component.css']
})
export class MapGeolocComponent implements AfterViewInit, OnDestroy {
  private map: any;

  constructor(
    private storeService: StoreService
  ) {}

  ngAfterViewInit(): void {
    this.initMap();

    this.map.on( 'click', this.clickInMap.bind(this) );
  }

  ngOnDestroy(): void {
    this.map.off('click', this.clickInMap);
  }

  initMap(): void {
    this.map = L.map('map', {
      center: [52, 20],
      zoom: 5.5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  clickInMap(e) {
    this.storeService.getWeather({
      lat: e.latlng.lat,
      lon: e.latlng.lng
    });

    L.popup()
      .setLatLng(e.latlng)
      .setContent('<h4 ng-click="alert()">Lokalizacja pobrana z klika po mapie!!!</h4>')
      .openOn(this.map);
  }
}
