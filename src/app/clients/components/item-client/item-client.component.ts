import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {

  @Input() item: Client;
  @Output() changed: EventEmitter<any> = new EventEmitter();
  states = StateClient;
  constructor() {
  }

  ngOnInit() {
    console.log(this.item);
  }

  changeState(event) {
    this.changed.emit(
      {
        item: this.item,
        state: event.target.value
      }
    );
  }

}
