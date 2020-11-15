import { Component } from '@angular/core';


@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})

export class WeatherSearchComponent {
  public searchType: string = 'current';

  constructor() {}

  handleChangeType(type: string) {
    this.searchType = type;
  }
}
