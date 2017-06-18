import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

// Service
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: 'weather',
  templateUrl: 'weather.html'
})

export class WeatherPage implements OnInit{

  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this._weatherService.getWeather("Boston", "MA")
      .subscribe(weather => {
        console.log(weather);
      });
  }

}
