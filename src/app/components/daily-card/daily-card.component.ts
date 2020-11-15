import { Component, Input, OnInit } from '@angular/core';
import { IDaily } from 'src/app/shared/store.service';

@Component({
  selector: 'app-daily-card',
  templateUrl: './daily-card.component.html',
  styleUrls: ['./daily-card.component.css']
})
export class DailyCardComponent implements OnInit {
  @Input() weather: IDaily;
  date: Date;
  path: string;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date(this.weather.dt * 1000);
    this.path = `./../../../assets/img/${this.weather.weather[0].icon}.png`;
  }
}
