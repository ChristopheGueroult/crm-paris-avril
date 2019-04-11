import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { ItemPrestationComponent } from '../../components/item-prestation/item-prestation.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  collection: Prestation[];
  // collection: Observable<Prestation[]>;
  headers: string[];
  @ViewChildren(ItemPrestationComponent) items: QueryList<ItemPrestationComponent>;
  constructor(
    private prestationService: PrestationsService
  ) {
  }

  ngOnInit() {
    // this.collection = this.prestationService.collection;
    this.prestationService.collection.subscribe((data) => {
      this.collection = data;
    });

    this.headers = [
      'type',
      'client',
      'durée',
      'total HT',
      'total TTC',
      'state'
    ];

  }

  update(obj: any) {
    this.prestationService.update(obj.item, obj.state);

  }

  lineClicked() {
    console.log('line selected');
    this.items.forEach((item) => {
      item.removeClassRowSelected();
    });

  }

}
