import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestation } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private pCollection: Observable<Prestation[]>;
  constructor(
    private afs: AngularFirestore
  ) {
    // this.collection = fakePrestation;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj)))
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
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
