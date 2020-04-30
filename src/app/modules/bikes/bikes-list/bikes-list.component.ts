import { Component, OnInit } from '@angular/core';
import { Bike, IBike } from '../model/bike';
import { BikesService } from '../bikes.service';
import { ClientService } from '../../clients/client.service';
import { IClient } from '../../clients/client.model';

@Component({
  selector: 'app-bikes-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.styl']
})
export class BikesListComponent implements OnInit {

  public bikesList: IBike[];
  public clientList: IClient[];

  deleteStatus = false;
  sale = {
    idClient: 0
  };
  constructor(private bikesService: BikesService) {
   }

  ngOnInit() {
   this.bikesService.queryBikes()
   .subscribe(res => {
     this.bikesList = res;
   });

  }

  deleteItem(id: string) {
    this.bikesService.delete(id)
    .subscribe(res => {
      console.log("Item Delete ok");
      this.deleteStatus = true;
      this.ngOnInit();
    });
  }

}
