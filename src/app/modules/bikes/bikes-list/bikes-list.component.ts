import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { IBike } from '../model/bike';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bikes-list.component.html',
  styleUrls: ['./bikes-list.component.styl']
})
export class BikesListComponent implements OnInit {

  bikesList: IBike[];

<<<<<<< HEAD
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
=======
  pageSize = 10;
  pageNumber = 0;
  totalRecords: any;
  constructor(private bikeService: BikesService) { }

  ngOnInit() {
  this.loadingPagenation({page: this.pageNumber});
  }

  loadingPagenation(event: any): void {
    console.log('Event ',event);
    this.bikeService.query({
      pageSize: this.pageSize,
      pageNumber: event.page
    })
    .subscribe((res: any) => {

      console.log('Get Data ', res);
      this.bikesList = res.content;
      this.totalRecords = res.totalElements;

    }, error => {
      console.error("Error ", error);
    });
  }

 
>>>>>>> develop
}
