import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tauxTva = 20;
  nbJours = 0;
  tjmHt = 600;
  state = State.OPTION;
  comment: string;
  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
  totalHT(): number {

    return this.tjmHt * this.nbJours;
  }
  totalTTC(tva?: number): number {

    if (tva) {
      return this.totalHT() * (1 + tva / 100);
    }
    if (tva <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + this.tauxTva / 100);
  }

}
