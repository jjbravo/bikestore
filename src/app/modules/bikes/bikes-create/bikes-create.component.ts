import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BikesService } from '../bikes.service';
import { IBike } from '../model/bike';
import { existAsyncValidator, existAsyncValidatorModel } from '../../../shared/customValidators/exist-validator';
@Component({
  selector: 'app-bikes-create',
  templateUrl: './bikes-create.component.html',
  styleUrls: ['./bikes-create.component.styl']
})
export class BikesCreateComponent implements OnInit {
  bike: IBike;
  checked: boolean;
  private imageSrc: string;

  formCreate = this.formBuilder.group({
    model: ['', [Validators.maxLength(3), Validators.minLength(2), Validators.required], existAsyncValidatorModel(this.bikesService)],
    price: ['', [Validators.required]],
    serial: ['', [Validators.required, Validators.maxLength(8)], existAsyncValidator(this.bikesService)],
    checked: [],
    image: null,
    imageContentType: ''
  });

  searchForm = this.formBuilder.group({
    serial: ['']
  });
  constructor(private formBuilder: FormBuilder, private bikesService: BikesService) { }

  ngOnInit() {
  }

  searchBike() {
    console.warn('serial ', this.searchForm.value.serial);
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
    console.log('data ->>>>', this.formCreate.value);
   
    this.bikesService.save(this.formCreate.value)
      .subscribe(res => {
        console.log(res);
      });
  }

  change(status: any): void {
    console.warn('status ', status);
  }

  uploadFile(event: any): void {
  

    this.selectFile(event);
   
  }

  selectFile(event) {
    let file = event.target.files[0];


    if (file) {
      let reader = new FileReader();
      this.formCreate.patchValue({
        imageContentType: file.type
      });
      reader.onload = this.handleFile.bind(this);

     console.log('data ', reader.readAsBinaryString(file));
    }
  }



  handleFile(event: any): void {
    var binaryString = event.target.result;
    this.imageSrc = btoa(binaryString);
    console.log("DATA BTOA ",btoa(binaryString));
    this.formCreate.patchValue({
      image: btoa(binaryString)
    });
  }


}
