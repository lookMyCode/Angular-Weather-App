import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/shared/store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() weather: IWeather;
  date: Date;
  path: string = '';

  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.weather.dt * 1000);
    this.path = `./../../../assets/img/${this.weather.weather[0].icon}.png`;
  }
}
