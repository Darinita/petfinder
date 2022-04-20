import { Component, OnInit } from '@angular/core';
import { Animal } from '../modelo/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-adopta-gatos',
  templateUrl: './adopta-gatos.component.html',
  styleUrls: ['./adopta-gatos.component.scss']
})
export class AdoptaGatosComponent implements OnInit {

  public gatos: Animal[] = [];

  constructor(private animalService: AnimalService) {
    this.gatos = animalService.obtenerGatos();
   }

  ngOnInit(): void {
  }

}
