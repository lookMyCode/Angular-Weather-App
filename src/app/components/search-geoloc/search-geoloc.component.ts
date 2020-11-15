import { StoreService } from './../../shared/store.service';
import { Component } from '@angular/core';
import { IGeoLoc, ITown } from 'src/app/shared/store.service';
import { polishTowns } from '../../../assets/data/polish_towns';


@Component({
  selector: 'app-search-geoloc',
  templateUrl: './search-geoloc.component.html',
  styleUrls: ['./search-geoloc.component.css']
})

export class SearchGeolocComponent {
  value: string = '';
  listOfTowns: ITown[] = [];
  geoLoc: IGeoLoc = null;

  constructor(
    private storeService: StoreService
  ) {}

  getVariants(): void {
    this.listOfTowns = [];

    polishTowns.forEach(region => {
      region.cities.forEach(city => {
        if (this.listOfTowns.length >= 3) return;

        city.text_simple.toLowerCase().includes(this.value.trim().toLowerCase()) && this.listOfTowns.push({
          town: city.text_simple,
          region: region.region_name,
          lat: +city.lat,
          lon: +city.lon,
        });
      })
    });
  }

  setGeoLoc(town: ITown): void {
    this.geoLoc = {
      lat: town.lat,
      lon: town.lon
    }
    this.value = `${town.town}, ${town.region}`;
    this.listOfTowns = [];
  }

  sendGeoLoc(): void {
    if (this.geoLoc !== null) {
      this.storeService.getWeather(this.geoLoc);
      this.clear();
    } else {
      let flag: boolean = true;

      polishTowns.forEach(region => {
        region.cities.forEach(city => {
          if (city.text_simple.toLowerCase().trim() === this.value.toLowerCase().trim()) {
            this.storeService.getWeather({
              lat: +city.lat,
              lon: +city.lon
            });
            this.clear();
            flag = false;
          }
        })
      });

      flag && alert('Nie znaleziono miasta!');
    }
  }

  clear(): void {
    this.value = '';
    this.listOfTowns = [];
    this.geoLoc = null;
  }
}
