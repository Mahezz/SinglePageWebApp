import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  
  heroes:Heroe[] = []

  constructor(private _heroesService: HeroesService,
              private router:Router){}

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes()
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }

  
}


