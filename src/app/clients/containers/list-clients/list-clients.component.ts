import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  collection: Client[];
  headers: string[];
  constructor(
    private clientsService: ClientsService
  ) {
  }

  ngOnInit() {
    this.collection = this.clientsService.collection;
    this.headers = [
      'name',
      'email',
      'state'
    ];

  }

  update(obj: any) {
    this.clientsService.update(obj.item, obj.state);

  }

}
