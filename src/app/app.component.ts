import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge-one';

  headers = ["Rank","Name","Price","Market Cap.", "change/h"];

  rows = [
      { "Rank": "1",
        "Name": "Bitcoin",
        "Price": 6362.74960614,
        "Market Cap": 110545616313,
        "change/h": 0.12,
      },
      {
        "Rank": "2",
        "Name": "Ethereum",
        "Price": 208.130215868,
        "Market Cap": 21473551841,
        "change/h": 0.04,
      },

      {
        "Rank": "3",
        "Name": "EOS",
        "Price": 5.3374942604,
        "MarketCap": 4837078114,
        "Change/h": 0.06,
      },

  ];
}
