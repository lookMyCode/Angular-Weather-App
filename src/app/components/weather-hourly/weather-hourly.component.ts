import { StoreService } from './../../shared/store.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { IWeather } from 'src/app/shared/store.service';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css']
})
export class WeatherHourlyComponent implements DoCheck {
  weather: IWeather[];

  constructor(
    private storeService: StoreService
  ) {}

  ngDoCheck(): void {
    this.weather = this.storeService.hourly;
  }

}
