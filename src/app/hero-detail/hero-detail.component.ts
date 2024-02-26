import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { UpperCasePipe,NgFor, NgIf, CommonModule, } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports : [FormsModule,CommonModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  @Input() hero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }

}

