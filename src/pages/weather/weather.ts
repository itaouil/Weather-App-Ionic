import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

// Service
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})

export class WeatherPage implements OnInit{

  public zmw;
  public weather;
  public results;
  public searchStr;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this.getDefaultCity();
    this._weatherService.getWeather(this.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getQuery() {
    this._weatherService.searchCities(this.searchStr)
      .subscribe(res => {
        this.results = res.RESULTS;
      });
  }

  chooseCity(city) {
    // Clear list
    this.results = [];
    this._weatherService.getWeather(city.zmw)
      .subscribe(weather => {
        this.weather = weather.current_observation;
      });
  }

  getDefaultCity() {
    this.zmw = "94125.1.99999";
  }

}
