import { Component, OnInit } from '@angular/core';
import { Ilot } from '../ilot';
import { IlotService } from '../ilot.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-ilots',
  templateUrl: './ilots.component.html',
  styleUrls: ['./ilots.component.css']
})
export class IlotsComponent implements OnInit {

  ilots: Ilot[];
  //chosenIlot: Ilot;

  constructor(private IlotService:IlotService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getIlots();
  }

  // onSelect(ilot:Ilot): void {
  //   this.chosenIlot = ilot;
  //   this.messageService.add('Ilot Component: Success, you chose an Ilot!');
  // }

  getIlots(): void{
    // this.heroes = this.heroService.getHeroes(); //synchronous only

    this.IlotService.getIlots()
      .subscribe(ilots => this.ilots = ilots);
  }

}
