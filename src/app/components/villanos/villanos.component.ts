import { Component, OnInit } from '@angular/core';
import { PersonajeService,Personaje } from '../../service/personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  personaje:Personaje[]=[];
  constructor( private _personajeService: PersonajeService, private _router: Router) { 
  }

  ngOnInit(): void {
    this.personaje = this._personajeService.getPersonajes();
    console.log(this.personaje);
  }
  
  verVillano(id:number){
    this._router.navigate(['/detalles',id]);
  }

}
