import { Component, OnInit, Input } from '@angular/core';
import { Ilot } from '../ilot';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IlotService } from '../ilot.service';

@Component({
  selector: 'app-ilot-detail',
  templateUrl: './ilot-detail.component.html',
  styleUrls: ['./ilot-detail.component.css']
})
export class IlotDetailComponent implements OnInit {
  @Input() ilot: Ilot;
  constructor(private route: ActivatedRoute,
    private ilotService: IlotService,
    private location: Location) { }

  ngOnInit(): void {
    this.getIlot();
  }

  getIlot(): void {
    const trophies = +this.route.snapshot.paramMap.get('trophies');
    this.ilotService.getIlot(trophies)
      .subscribe(ilot => this.ilot = ilot);
  }

  goBack(): void {
    this.location.back();
  }
}
