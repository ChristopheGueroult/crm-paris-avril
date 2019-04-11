import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'lkjsdf',
    name: 'Atos',
    email: 'contact@atos.fr'
  }),
  new Client({
    id: 'sdfs',
    name: 'Modis',
    email: 'contact@modis.fr',
  }),
];
