// Import DI, HTTP and Observables modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// Injectable Decorator
@Injectable()

export class WeatherService {

  private apiKey: string;
  private searchUrl: string;
  private conditionsUrl: string;

  constructor(public _http:Http) {
    this.apiKey = '716a6516da3632a7';
    this.conditionsUrl = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q';
    this.searchUrl = "http://localhost:8100/search/aq?query=";
  }

  getWeather(zmw) {
    return this._http.get(this.conditionsUrl + '/zmw:' + zmw + '.json')
      .map(res => res.json());
  }

  searchCities(searchStr) {
    return this._http.get(this.searchUrl + searchStr)
      .map(res => res.json());
  }

}
