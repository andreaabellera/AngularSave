import { Injectable } from '@angular/core';
import { Ilot } from './ilot';
import { ILOTS } from './all-ilots';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})

export class IlotService {

  constructor(private messageService: MessageService) { }

  getIlots(): Observable<Ilot[]> {
    this.messageService.add('IlotService: Got the ilots');
    return of(ILOTS);
  }

  getIlot(trophies: number): Observable<Ilot>{
    this.messageService.add(`IlotService: Got you trophies=${trophies}`);
    return of (ILOTS.find(ilot => ilot.trophies === trophies));
  }

}
