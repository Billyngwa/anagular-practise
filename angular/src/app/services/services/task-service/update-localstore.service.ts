import { Injectable } from '@angular/core';
import { DatabaseService } from '../../localstore/database.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateLocalstoreService {

  constructor(private database : DatabaseService) { }
  

}
