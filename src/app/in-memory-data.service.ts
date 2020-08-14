import { Injectable } from '@angular/core';
import{InMemoryDbService} from 'angular-in-memory-web-api';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes =[
      {id: 11, name: 'Dr Nice'},
      {id: 12, name: 'Narco'},
      {id:13, name: 'Bombasto'},
      {id:14, name:'Celeritas'},
      {id:15, name: 'magneta'},
      {id:16, name:'rubberMan'},
      {id: 17, name: 'Dyname'},
      {id:18, name:'DR IQ'},
      {id: 19, name: 'Magma'},
      {id:20, name:'Tornado'}
    ];
    return {heroes};
  }
  genId(heroes: Hero[]):number{
    return heroes.length>0?Math.max(...heroes.map(hero => hero.id))+1:11;
  }
  constructor() { }
}
