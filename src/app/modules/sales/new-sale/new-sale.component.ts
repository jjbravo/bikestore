import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IClient } from '../../clients/client.model';
import { BikesService } from '../../bikes/bikes.service';
import { IBike } from '../../bikes/model/bike';
import { IFilters } from '../../../shared/filters.interface';
import { ISale } from '../sale.model';
import { SalesService } from '../sales.service';
@Component({
  selector: 'app-new-sale',
  templateUrl: './new-sale.component.html',
  styleUrls: ['./new-sale.component.styl']
})
export class NewSaleComponent implements OnInit, AfterViewInit {

  @Input() client: IClient;
  confirmSaleShowDialog = false;
  bikesList: IBike[] = [];
  filters = {};
  pageSize = 10;
  pageNumber = 0;
  totalRecords: any;
  total = 0;
  carSale: ISale[] = [];
  productsList: IBike[] = [];
  constructor(private bikesService: BikesService,  private saleService: SalesService) { }

  ngOnInit(): void {
    console.log('client ', this.client);
    this.loadAll({page: 0});
  }

  ngAfterViewInit(): void {
  }


  loadAll(pagination?: any): void {
   this.bikesService.query(this.formatFilters(pagination))
      .subscribe((res: any) => {
        this.bikesList = res.content;
        this.totalRecords = res.totalElements;
      });
  }


  cleanCar(): void {
    this.total = 0;
    this.carSale = [];
  }

  addToCar(bike: IBike): void {

    if (!this.client) {
      console.log('Seleccione un Cliente');
    } else {
      this.total += parseFloat(bike.price);
      console.log('total ', this.total);
      this.carSale.push({
        bike,
        client: this.client
      });
    }
  }

  confirmSale(): void {
    this.saleService.saveMultiple(this.carSale)
      .subscribe(res => {
        console.log('res ', res);
        this.cleanCar();
        this.confirmSaleShowDialog = true;
      });
  }
  closeDialog(): void {
    this.confirmSaleShowDialog = false;
  }
 formatFilters(pagination: any): any {
   console.log('page row ', pagination);
   this.filters['pageNumber'] = pagination.page;
   this.filters['pageSize'] = this.pageSize;

   return this.filters;
  }
}
