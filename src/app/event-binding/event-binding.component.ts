import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
titre : string = "Event Binding";

  constructor() { }

  ngOnInit(): void {
  }
  onAfficher(val:string){
    console.log(val);
    }
    onKeyPress(event: KeyboardEvent){
      console.log(event.key);
      }
}
