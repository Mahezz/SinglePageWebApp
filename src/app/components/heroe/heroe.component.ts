import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    heroeImg: string = "none"
    heroe:any = {}

    constructor( private activatedRoute: ActivatedRoute, private _heroesService: HeroesService){
      this.activatedRoute.params.subscribe(params=> {
        this.heroe = this._heroesService.getHeroe(params['id'])
        console.log(this.heroe)
      })
    }

    getHeroeImg(heroeCompany:string){
      if(heroeCompany="DC"){
        this.heroeImg = "DCLogo.png"
      }else if(heroeCompany="Marvel"){
        this.heroeImg = "marvelLogo.png"
      }

      console.log(this.heroeImg)
    }
}
