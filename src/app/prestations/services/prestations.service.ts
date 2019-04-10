import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestation } from './fake-prestations';

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

  // delete item in collection

  // get item by id
}
