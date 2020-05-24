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

  totalRecords: any;
  pageSize = 10;
  pageNumber = 0;
  constructor(private bikesService: BikesService) {
   }

  ngOnInit() {
   this.loadingBikesPage(this.pageNumber, this.pageSize);

  }

  loadingBikesPage(pageNumber: number, pageSize: number ): void {
    this.bikesService.queryBikes({
      pageSize: pageSize,
      pageNumber: pageNumber
    })
    .subscribe((res: any) => {
      this.bikesList = res.content;
      this.totalRecords = res.totalElements;
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

  paginate(event: any): void {
    console.warn('Event Paginate ',event);
    this.loadingBikesPage(event.page, event.rows);
  }
}
