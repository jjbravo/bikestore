import { Component, OnInit } from '@angular/core';
import { BikesService } from '../../bikes/bikes.service';
import { IBike } from '../../bikes/model/bike';
import { ISale } from '../sale.model';
import { ClientService } from '../../clients/client.service';
import { IClient } from '../../clients/client.model';
import { FormBuilder } from '@angular/forms';
import { SalesService } from '../sales.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.styl']
})
export class CatalogueComponent implements OnInit {
  bikesList: IBike[];
  carSale: ISale[] = [];
  total: number = 0;
  clientList: IClient[] = [];
  formSearch = this.fb.group({
    client: ''
  });

  selectedClientItem: IClient;
  clientNoSelected = false;
  confirmSaleShowDialog = false;

  text: string;

  results: IClient[];

  constructor(private bikeService: BikesService,
    private clientService: ClientService,
    private fb: FormBuilder,
    private saleService: SalesService
  ) { }

  ngOnInit() {
    this.bikeService.queryBikes({
      pageSize: 10,
      pageNumber: 0
    })
      .subscribe((res: any) => {
        this.bikesList = res.content;
      })
  }

  addToCar(bike: IBike): void {
    if (!this.selectedClientItem) {
      console.log('Seleccione un Cliente');
      this.clientNoSelected = true;
    } else {
      this.total += parseFloat(bike.price);
      this.carSale.push({
        bikeId: bike.id,
        clientId: this.selectedClientItem.id,
        bike: bike,
        client: this.selectedClientItem
      });
    }

  }

  cleanCar(): void {
    this.carSale = [];
  }

  selectedClient(client: IClient) {
    console.log('Client ', client);
    this.selectedClientItem = client;
    this.clientNoSelected = false;
  }

  saveSale() {
    this.saleService.saveMultiple(this.carSale)
      .subscribe(res => {
        console.log('res ', res);
        this.confirmSaleShowDialog = true;
      });
  }


  closeDialog(): void {
    this.confirmSaleShowDialog = false;
    this.cleanCar();
    this.selectedClientItem = null;
  }
  changeSelected(): void {
    this.selectedClientItem = this.formSearch.value.client
    this.clientNoSelected = false;

  }

  search(event: any) {
    this.clientService.queryParam({
      'document.contains': event.query
    }).subscribe(data => {
      this.results = data;
      console.warn(this.results);
    });
  }
}
