import { Component, Input, OnInit } from '@angular/core';
import { Animal } from '../modelo/animal';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  @Input()
  animales: Animal[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
