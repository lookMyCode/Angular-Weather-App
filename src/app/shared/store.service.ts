import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs';

export type strNum = number | string;

export interface IGeoLoc {
  lat: number
  lon: number
}

export interface ITown {
  town: string
  region: string
  lat: number
  lon: number
}

export interface ICity {
  id?: strNum
  lat: strNum
  lon: strNum
  text?: string
  text_gray?: string
  text_simple: string
  url?: string
  zoom?: strNum
}

export interface IRegion {
  region_name: string
  cities: ICity[]
}

export interface IWeather {
  dt: number,
  sunrise?: strNum
  sunset?: strNum
  temp: strNum 
  feels_like: strNum 
  pressure: strNum
  humidity: strNum
  dev_point?: strNum
  clouds: strNum
  uvi?: strNum
  visibility?: strNum
  wind_speed: strNum
  wind_gust?: strNum
  wind_deg?: strNum
  pop? : strNum
  rain?: {
    '1h': strNum
  }
  snow?: {
    '1h': strNum
  }
  weather: {
    id: strNum
    main: string
    description: string
    icon: string
  }[]
}

export interface IDaily {
  dt: number,
  sunrise?: strNum
  sunset?: strNum
  temp: {
    morn: strNum
    day: strNum
    eve: strNum
    night: strNum
    min: strNum
    max: strNum
  }
  feels_like: {
    morn: strNum
    day: strNum
    eve: strNum
    night: strNum
  }
  pressure: strNum
  humidity: strNum
  dev_point?: strNum
  clouds: strNum
  uvi?: strNum
  visibility?: strNum
  wind_speed: strNum
  wind_gust?: strNum
  wind_deg?: strNum
  pop? : strNum
  rain?: strNum 
  snow?: strNum 
  weather: {
    id: strNum
    main: string
    description: string
    icon: string
  }[]
}

interface IResponse {
  lat?: strNum
  lon?: strNum
  timezone?: string
  timezone_offset?: strNum
  current: IWeather
  minutely?: any | any[]
  hourly: IWeather[]
  daily: IDaily[]
  alerts?: any
}

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public geoLoc: IGeoLoc = null;
  public current: IWeather = null;
  public hourly: IWeather[] = null;
  public daily: IDaily[] = null;

  private PATH: string = 'https://api.openweathermap.org/data/2.5/onecall';
  private LANG: string = 'pl';
  private APP_ID: string = '49786cbc2073d4568bb0c7a4f3b59199';
  private UNITS: string = 'metric';

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  getWeather(coord: IGeoLoc): void {
    this.geoLoc = coord;

    this.router.navigate([`${this.geoLoc.lat}/${this.geoLoc.lon}/current`]);
  }

  fetchWeather(params: Params): void {
    this.http.get<Promise<IResponse> | Observable<IResponse> | IResponse>(this.PATH, {
     params: {
       ...params,
       lang: this.LANG,
       appid: this.APP_ID,
       units: this.UNITS
     }
    })
      .subscribe( (res: IResponse) => {
        this.current = res.current;
        this.hourly = res.hourly;
        this.daily = res.daily;
      } );
  }
}
