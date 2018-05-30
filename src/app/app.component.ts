import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Può Contare';
  canCount: any = 0;
  waterFacts = ['water Increases Energy & Relieves Fatigue', 'Water Promotes Weight Loss', 'Water Flushes Out Toxins',
   'Water Improves Skin Complexion', 'Water Maintains Regularity', 'water Boosts Immune System',
    'Water acts as a Natural Headache Remedy', 'Water Prevents Cramps & Sprains ',
    'When the body is functioning at its best, you will feel great and be happy!'
  , 'Water is FREE! Even if you choose bottled/filtered water, it’s STILL cheaper than that high sugar and fat-filled latte!'];
  randomQuote: any;

  constructor() {
  }

  ngOnInit() {
    this.canCount = localStorage.getItem('count');
  }

  onAddCan(event) {
      if (event.target.innerText === 'Add') {
        this.canCount = Number(this.canCount) + 1;
      } else if (event.target.innerText === 'Delete') {
        this.canCount = Number(this.canCount) - 1;
      } else if (event.target.innerText === 'Paid') {
        this.canCount = 0;
      } else {
        this.randomQuote =  this.waterFacts[Math.floor(Math.random() * this.waterFacts.length)];
      }
      localStorage.setItem('count', this.canCount);
  }

}
