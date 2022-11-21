import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  titre: string = "Partie 2: Property ";
  nom: string = "Nourhaine";
  actif : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
