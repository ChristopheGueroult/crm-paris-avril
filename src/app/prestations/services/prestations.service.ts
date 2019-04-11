import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestation } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Prestation[];
  constructor() {
    this.collection = fakePrestation;
  }

  // get collection
  get collection(): Prestation[] {
    return this.pCollection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this.pCollection = col;
  }

  // add item in collection

  // update item in collection
  update(item: Prestation, state: State) {
    item.state = state;
    console.log(item);

  }

  // delete item in collection

  // get item by id
}
