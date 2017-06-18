import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

// Service
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})

export class WeatherPage implements OnInit{

  public weather;
  public results;
  public searchStr;

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather("Boston", "MA")
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

}
