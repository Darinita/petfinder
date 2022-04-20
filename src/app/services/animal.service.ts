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
      imagen: "pexels-cats-coming-1543793.jpg"
    },
    {
      nombre:"Nube",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-06-15"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-eva-kubíčková-2083940.jpg"
    },
    {
      nombre:"Pepe",
      sexo:"Macho",
      fechaNacimiento: new Date("2021-02-12"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-dan-galvani-sommavilla-4601871.jpg"
    },
    {
      nombre:"Limon",
      sexo:"Macho",
      fechaNacimiento: new Date("2019-09-21"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-dương-nhân-2817430.jpg"
    },
    {
      nombre:"Nilo",
      sexo:"Macho",
      fechaNacimiento: new Date("2021-01-16"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-wojciech-kumpicki-2071882.jpg"
    },
    {
      nombre:"Batman y Teo",
      sexo:"Macho",
      fechaNacimiento: new Date("2020-08-14"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-arina-krasnikova-7725618.jpg"
    },
    {
      nombre:"Silver",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-07-10"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-omar-ramadan-6563627.jpg"
    },
    {
      nombre:"Oreo",
      sexo:"Macho",
      fechaNacimiento: new Date("2021-08-23"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-dids-1327888.jpg"
    },
    {
      nombre:"Mia",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-06-21"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-alena-koval-982300.jpg"
    },
    {
      nombre:"Leonardo",
      sexo:"Macho",
      fechaNacimiento: new Date("2020-03-15"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-leonardo-de-oliveira-1770918.jpg"
    },
    {
      nombre:"Luna",
      sexo:"Hembra",
      fechaNacimiento: new Date("2021-04-11"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-lilartsy-1461622.jpg"
    },
    {
      nombre:"Sabrina",
      sexo:"Hembra",
      fechaNacimiento: new Date("2020-12-30"),
      raza:"Común Europeo",
      localidad:"Madrid",
      imagen: "pexels-ekaterina-bolovtsova-7445130.jpg"
    },
  ];
  obtenerGatos(){
    return this.gatos
  }

  constructor() { }
}
