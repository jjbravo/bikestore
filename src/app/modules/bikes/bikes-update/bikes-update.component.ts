import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikesService } from '../bikes.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { IBike } from '../model/bike';

@Component({
  selector: 'app-bikes-update',
  templateUrl: './bikes-update.component.html',
  styleUrls: ['./bikes-update.component.styl']
})
export class BikesUpdateComponent implements OnInit {
  formCreate: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private bikesService: BikesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.formCreate = this.formBuilder.group({
      id: [''],
      model: ['', [Validators.maxLength(3), Validators.minLength(2), Validators.required]],
      price: ['', [Validators.required]],
      serial: ['', [Validators.required, Validators.maxLength(4)]]
    });
   }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID', id);
    this.bikesService.getBikeById(id)
    .subscribe(res => {
      this.updateForm(res);
      
    });
  }

  
  update() {
    console.log('data', this.formCreate.value);
    this.bikesService.update(this.formCreate.value)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/bikes']);
    });
  }

  private updateForm(bike: IBike) {
    this.formCreate.patchValue({
      id: bike.id,
      model: bike.model,
      price: bike.price,
      serial: bike.serial
    });
    console.log('REST', this.formCreate.value);

  }
}
