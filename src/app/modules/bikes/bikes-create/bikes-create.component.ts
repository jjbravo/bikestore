import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { BikesService } from '../bikes.service';
import { IBike } from '../model/bike';
@Component({
  selector: 'app-bikes-create',
  templateUrl: './bikes-create.component.html',
  styleUrls: ['./bikes-create.component.styl']
})
export class BikesCreateComponent implements OnInit {
 bike: IBike;
  formCreate = this.formBuilder.group({
    model: ['', [Validators.maxLength(3), Validators.minLength(2), Validators.required]],
    price: ['', [Validators.required]],
    serial: ['', [Validators.required, Validators.maxLength(4)]]
  });

  searchForm = this.formBuilder.group({
    serial: ['']
  });
  constructor(private formBuilder: FormBuilder, private bikesService: BikesService) { }

  ngOnInit() {
  }

  searchBike() {
    console.warn('serial ',this.searchForm.value.serial);
    this.bikesService.findBikeBySerial(this.searchForm.value.serial)
    .subscribe(res => {
      console.warn(res);
      this.bike = res;
    }, err => {
      this.bike = null;
      console.warn('Error ', err);
    });
  }
  save() {
    console.log('data', this.formCreate.value);
    this.bikesService.save(this.formCreate.value)
    .subscribe(res => {
      console.log(res);
    })
  }

}
