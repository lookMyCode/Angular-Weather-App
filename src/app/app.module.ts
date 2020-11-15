import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { WeatherResultComponent } from './components/weather-result/weather-result.component';
import { CurrentGeolocComponent } from './components/current-geoloc/current-geoloc.component';
import { SearchGeolocComponent } from './components/search-geoloc/search-geoloc.component';
import { SelectGeolocComponent } from './components/select-geoloc/select-geoloc.component';
import { MapGeolocComponent } from './components/map-geoloc/map-geoloc.component';
import { FormsModule } from '@angular/forms';
import { EmptyComponent } from './components/empty/empty.component';
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';
import { WeatherHourlyComponent } from './components/weather-hourly/weather-hourly.component';
import { WeatherDailyComponent } from './components/weather-daily/weather-daily.component';
import { CardComponent } from './components/card/card.component';
import { DailyCardComponent } from './components/daily-card/daily-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WeatherSearchComponent,
    WeatherResultComponent,
    CurrentGeolocComponent,
    SearchGeolocComponent,
    SelectGeolocComponent,
    MapGeolocComponent,
    EmptyComponent,
    WeatherCurrentComponent,
    WeatherHourlyComponent,
    WeatherDailyComponent,
    CardComponent,
    DailyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
