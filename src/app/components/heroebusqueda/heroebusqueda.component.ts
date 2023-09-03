import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe,HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroebusqueda',
  templateUrl: './heroebusqueda.component.html'
})
export class HeroebusquedaComponent implements OnInit {
    heroes:Heroe[] = []
    terminoBusqueda:string = ""

    constructor(private _heroesService: HeroesService, private activatedRoute: ActivatedRoute,private router:Router){

    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
          this.terminoBusqueda = params['termino']
        })

        this.heroes = this._heroesService.buscarHeroes(this.terminoBusqueda)
        console.log(this.heroes)
        
    }
}
