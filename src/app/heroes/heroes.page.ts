import { Component, OnInit } from "@angular/core";
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl:'./heroes.page.html',
    styleUrls: ['./heroes.page.scss']
})
export class HeroesPage implements OnInit{
    hero: Hero ={
        id: 1,
        name: 'windstorm'
    };
    //heroes = HEROES;
    heroes:Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService){

    }
    onSelect(hero: Hero): void{
        this.selectedHero = hero;
    }
    getHeroes(): void{
        this.heroService.getHeroes()
        .subscribe(heroes => this.heroes=heroes);
    }
    ngOnInit(){
        this.getHeroes();

    }
    add(name:string):void{
        name = name.trim();
        if(!name){return;}
        this.heroService.addHero({name} as Hero)
        .subscribe(hero =>{
            this.heroes.push(hero);
        });
    }

    delete(hero: Hero): void{
        this.heroes = this.heroes.filter(h => h !==hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}