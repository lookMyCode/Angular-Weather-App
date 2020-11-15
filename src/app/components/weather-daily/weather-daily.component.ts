import { IDaily, StoreService } from './../../shared/store.service';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.css']
})
export class WeatherDailyComponent implements DoCheck {
  weather: IDaily[] = null;

  constructor(
    private storeService: StoreService
  ) {}

  ngDoCheck(): void {
    this.weather = this.storeService.daily;
  }
}
