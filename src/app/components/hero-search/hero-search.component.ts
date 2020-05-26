import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  personaje: any[] = [];
  busqueda: string;
  constructor( private _personajeService:PersonajeService,
               private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params=>{
      this.busqueda = params['busqueda'];
      this.personaje = this._personajeService.buscarPersonaje(params['busqueda']);
    })
  }
}
