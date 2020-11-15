import { StoreService } from './../../shared/store.service';
import { Component, DoCheck } from '@angular/core';
import { IWeather } from 'src/app/shared/store.service';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css']
})
export class WeatherCurrentComponent implements DoCheck {
  weather: IWeather = null;

  constructor(
    private storeService: StoreService
  ) {}

  ngDoCheck(): void {
    this.weather = this.storeService.current;
  }
}
