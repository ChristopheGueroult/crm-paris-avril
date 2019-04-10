import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  collection: Prestation[];
  headers: string[];
  constructor(
    private prestationService: PrestationsService
  ) {
  }

  ngOnInit() {
    this.collection = this.prestationService.collection;
    this.headers = [
      'type',
      'client',
      'durée',
      'total HT',
      'total TTC',
      'state'
    ];

  }

  update(item: any) {
    console.log(item);

  }

}
