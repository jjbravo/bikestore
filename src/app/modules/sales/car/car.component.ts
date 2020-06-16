import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IClient } from '../../clients/client.model';
import { IBike } from '../../bikes/model/bike';
import { ISale } from '../sale.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.styl']
})
export class CarComponent implements OnInit {

  @Input() productsList: IBike[] = [];
  @Input() client: IClient;
  @Output() eventCarSale = new EventEmitter<ISale[]>();

  sale: ISale[] = [];
  total = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(' car Client ', this.client);
    console.log(' car products ', this.productsList);
    this.productsList.forEach((item: any) => {
      this.total += item.price;
      this.sale.push({
        bike: item,
        client: this.client
      });
    });
  }

  confirmSale(): void {
    this.eventCarSale.emit(this.sale);
  }
}
