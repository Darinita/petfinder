import { Injectable } from '@angular/core';
import { Animal } from '../modelo/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  gatos:Animal[] = [
    {
      nombre:"Lola",
      sexo:"Hembra",
      fechaNacimiento: new Date("2020-06-15"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Lola.jpg"
    },
    {
      nombre:"Nube",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-06-15"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Nube.jpg"
    },
    {
      nombre:"Pepe",
      sexo:"Macho",
      fechaNacimiento: new Date("2021-02-12"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Pepe.jpg"
    },
    {
      nombre:"Limon",
      sexo:"Macho",
      fechaNacimiento: new Date("2019-09-21"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Limon.jpg"
    },
    {
      nombre:"Nilo",
      sexo:"Macho",
      fechaNacimiento: new Date("2021-01-16"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Nilo.jpg"
    },
    {
      nombre:"Batman y Teo",
      sexo:"Macho",
      fechaNacimiento: new Date("2020-08-14"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Batman y Teo.jpg"
    },
    {
      nombre:"Silver",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-07-10"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Silver.jpg"
    },
    {
      nombre:"Oreo",
      sexo:"Macho",
      fechaNacimiento: new Date("2021-08-23"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Oreo.jpg"
    },
    {
      nombre:"Mia",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-06-21"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Mia.jpg"
    },
    {
      nombre:"Leonardo",
      sexo:"Macho",
      fechaNacimiento: new Date("2020-03-15"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Leonardo.jpg"
    },
    {
      nombre:"Luna",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-04-11"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Luna.jpg"
    },
    {
      nombre:"Sabrina",
      sexo:"Hembra",
      fechaNacimiento: new Date("2020-12-30"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "Sabrina.jpg"
    },
  ];
  obtenerGatos(){
    return this.gatos
  }

  constructor() { }
}
