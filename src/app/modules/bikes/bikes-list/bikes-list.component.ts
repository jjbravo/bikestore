import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { IBike } from '../model/bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.styl']
})
export class BikesListComponent implements OnInit {
 // status: boolean;
  bikesList: IBike[];
  pageSize = 10;
  pageNumber = 0;
  totalRecords: any;
  constructor(private bikeService: BikesService) { }

  ngOnInit() {
  this.loadingPagenation({page: this.pageNumber});
  }

  loadingPagenation(event: any): void {
    console.log('Event ', event);
    this.bikeService.query({
      pageSize: this.pageSize,
      pageNumber: event.page
    })
    .subscribe((res: any) => {

      console.log('Get Data ', res);
      this.bikesList = res.content;
      this.totalRecords = res.totalElements;

    }, error => {
      console.error('error ', error);
    });
  }

  changeStatus(item: IBike): void {
    console.warn('item ', item);
    this.bikeService.update(item)
    .subscribe((res: IBike) => {
      console.warn('Todo actualizado', res);
    });
  }

}
