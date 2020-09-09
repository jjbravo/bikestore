import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients-create',
  templateUrl: './clients-create.component.html',
  styleUrls: ['./clients-create.component.styl']
})
export class ClientsCreateComponent implements OnInit {
  formClient = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}')]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  createClient(): void {}
}
