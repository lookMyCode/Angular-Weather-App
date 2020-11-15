import { StoreService } from './../../shared/store.service';
import { IGeoLoc } from 'src/app/shared/store.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-weather-result',
  templateUrl: './weather-result.component.html',
  styleUrls: ['./weather-result.component.css']
})
export class WeatherResultComponent implements OnInit {
  geoLoc: IGeoLoc = null;
  types: string[] = ['current', 'hourly', 'daily'];
  type: string = this.types[0];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    const url: string = window.location.pathname;
    this.types.forEach(type => {
      if ( url.includes(type) ) {
        this.type = type;
      }
    });

    this.route.params
      .subscribe( (params: Params) => {
        this.storeService.fetchWeather(params);

        this.geoLoc = {
          lat: +params.lat,
          lon: +params.lon,
        }
      } );
  }

  changeWeatherType(type: string): void {
    this.type = type;
    this.router.navigate([`${this.geoLoc.lat}/${this.geoLoc.lon}/${type}`]);
  }
}
