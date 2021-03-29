import { Component, OnInit } from '@angular/core';
import { Ilot } from '../ilot';
import { IlotService } from '../ilot.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ilots: Ilot[] = [];

  constructor(private ilotService: IlotService) { }

  ngOnInit(): void {
    this.getIlots();
  }

  getIlots(): void {
    this.ilotService.getIlots()
      .subscribe(ilots => this.ilots = ilots.slice(1, 5));
  }

}
