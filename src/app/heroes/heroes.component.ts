import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // 1st
  // hero = 'This is content coming from Heroes Component';

  // 2nd
  // hero: Hero = {
  //   id: 1,
  //   name: 'Ashima'
  // };

  // 3rd
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
