import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  pageActual:number = 1;
  items: any = [
    {
        "name": "Luke Skywalker", 
        "height": "172", 
        "mass": "77", 
        "hair_color": "blond", 
        "skin_color": "fair", 
        "eye_color": "blue", 
        "birth_year": "19BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.py4e.com/api/planets/1/", 
        "films": [
            "https://swapi.py4e.com/api/films/1/", 
            "https://swapi.py4e.com/api/films/2/", 
            "https://swapi.py4e.com/api/films/3/", 
            "https://swapi.py4e.com/api/films/6/", 
            "https://swapi.py4e.com/api/films/7/"
        ], 
        "species": [
            "https://swapi.py4e.com/api/species/1/"
        ], 
        "vehicles": [
            "https://swapi.py4e.com/api/vehicles/14/", 
            "https://swapi.py4e.com/api/vehicles/30/"
        ], 
        "starships": [
            "https://swapi.py4e.com/api/starships/12/", 
            "https://swapi.py4e.com/api/starships/22/"
        ], 
        "created": "2014-12-09T13:50:51.644000Z", 
        "edited": "2014-12-20T21:17:56.891000Z", 
        "url": "https://swapi.py4e.com/api/people/1/"
    }, 
    {
        "name": "Darth Vader", 
        "height": "202", 
        "mass": "136", 
        "hair_color": "none", 
        "skin_color": "white", 
        "eye_color": "yellow", 
        "birth_year": "41.9BBY", 
        "gender": "male", 
        "homeworld": "https://swapi.py4e.com/api/planets/1/", 
        "films": [
            "https://swapi.py4e.com/api/films/1/", 
            "https://swapi.py4e.com/api/films/2/", 
            "https://swapi.py4e.com/api/films/3/", 
            "https://swapi.py4e.com/api/films/6/"
        ], 
        "species": [
            "https://swapi.py4e.com/api/species/1/"
        ], 
        "vehicles": [], 
        "starships": [
            "https://swapi.py4e.com/api/starships/13/"
        ], 
        "created": "2014-12-10T15:18:20.704000Z", 
        "edited": "2014-12-20T21:17:50.313000Z", 
        "url": "https://swapi.py4e.com/api/people/4/"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
