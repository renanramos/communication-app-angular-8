import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.mode';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: number;

  clients: Client[];

  constructor() {
    this.clients = [
      { id: 1, name: "Ross", age: 32 },
      { id: 2, name: "Phoebe", age: 31 },
      { id: 3, name: "Joey", age: 33 },
      { id: 4, name: "Monica", age: 30 },
      { id: 5, name: "Chandler", age: 34 },
      { id: 6, name: "Rachel", age: 31 }
    ];
  }

  ngOnInit() {
  }

}
