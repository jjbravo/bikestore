import { Component, OnInit } from '@angular/core';
import { SalesService } from '../sales.service';
import { ISale } from '../sale.model';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.styl']
})
export class SalesListComponent implements OnInit {

  salesList: ISale[] = [];

  constructor(private salesService: SalesService) { }

  ngOnInit() {
    this.salesService.query()
    .subscribe(res => {
      this.salesList = res;
    });
  }

}
