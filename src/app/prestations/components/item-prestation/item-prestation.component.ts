import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  @Input() item: Prestation;
  @Output() changed: EventEmitter<any> = new EventEmitter();
  @Output() selectedChange: EventEmitter<any> = new EventEmitter();
  states = State;
  selected = false;
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

  removeClassRowSelected() {
    this.selected = false;
  }

  toggle() {
    this.selectedChange.emit();
    this.selected = true;
  }

}
