// Import DI, HTTP and Observables modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// Injectable Decorator
@Injectable()

export class WeatherService {

  private apiKey: string;
  private conditionsUrl: string;

  constructor(public _http:Http) {
    this.apiKey = '716a6516da3632a7';
    this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
  }

  getWeather(city, state) {
    return this._http.get(this.conditionsUrl + '/' + state + '/' + city + '.json')
      .map(res => res.json());
  }
}
