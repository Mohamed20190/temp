import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { IHero } from '../ihero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public heros: IHero;
  public heroError: {};

  constructor(private generalService: GeneralService) {}

  ngOnInit() {
    this.generalService
      .getHero()
      .subscribe(
        (data: IHero) => (this.heros = data),
        (error: {}) => (this.heroError = error)
      );
  }
}
