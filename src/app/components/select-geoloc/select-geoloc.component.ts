import { IRegion, StoreService } from './../../shared/store.service';
import { polishTowns } from './../../../assets/data/polish_towns';
import { Component } from '@angular/core';

@Component({
  selector: 'app-select-geoloc',
  templateUrl: './select-geoloc.component.html',
  styleUrls: ['./select-geoloc.component.css']
})
export class SelectGeolocComponent {
  regions: IRegion[] = polishTowns;
  regionSelectValue: string = '';
  selectedRegion: IRegion = null;
  citySelectValue: string = '';

  constructor(
    private storeService: StoreService
  ) {}

  setRegionSelectValue(val): void {
    this.regionSelectValue = val.trim();
  }

  setSelectedRegion(): void {
    this.selectedRegion = this.regions.filter( region => region.region_name.trim().toLowerCase() === this.regionSelectValue.toLowerCase() )[0];
  }

  setCitySelectValue(val): void {
    this.citySelectValue = val.trim();
  }

  sendGeoLoc(): void {
    const town = this.selectedRegion.cities.filter( city => city.text_simple.trim().toLowerCase() === this.citySelectValue.toLowerCase() )[0];

    town && this.storeService.getWeather({
      lat: +town.lat,
      lon: +town.lon
    });

    town || alert('Wybierz miasto');
  }
}
