import { WeatherDailyComponent } from './components/weather-daily/weather-daily.component';
import { WeatherHourlyComponent } from './components/weather-hourly/weather-hourly.component';
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';
import { WeatherResultComponent } from './components/weather-result/weather-result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyComponent } from './components/empty/empty.component';

const routes: Routes = [
  {path: '', component: EmptyComponent},
  {path: ':lat/:lon', component: WeatherResultComponent, children: [
    {path: 'current', component: WeatherCurrentComponent},
    {path: 'hourly', component: WeatherHourlyComponent},
    {path: 'daily', component: WeatherDailyComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
