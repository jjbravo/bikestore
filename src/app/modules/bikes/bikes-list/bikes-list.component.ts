import { Component, OnInit } from '@angular/core';
import { BikesService } from '../bikes.service';
import { IBike } from '../model/bike';
import { FormBuilder, Validators } from '@angular/forms';

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
  filterForm = this.fb.group({
    model: '',
    serial: '',
  });

  filters = {};

  constructor(private bikeService: BikesService, private fb: FormBuilder) { }

  ngOnInit() {
  this.loadingPagenation(this.pageNumber);
  }

  loadFilterEvent(): void {
    this.formatFilters();
    this.loadingPagenation(0);
  }

  private formatFilters(): void {
    if (this.filterForm.value.model) {
      this.filters['model'] = this.filterForm.value.model;
    } else {
      delete this.filters['model'];
    }

    if (this.filterForm.value.serial) {
      this.filters['serial'] = this.filterForm.value.serial;
    } else {
      delete this.filters['serial'];
    }
  }

  loadingPagenation(numberPage: number): void {
    console.log('Event ', numberPage);
    this.pageNumber = numberPage;
    this.filters['pageNumber'] = this.pageNumber;
    this.filters['pageSize'] = this.pageSize;
    this.bikeService.query(this.filters)
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
