import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { IClientWithSale, IClient } from '../client.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-with-sales',
  templateUrl: './view-with-sales.component.html',
  styleUrls: ['./view-with-sales.component.styl']
})
export class ViewWithSalesComponent implements OnInit {
  client: IClient;
  searchForm = this.fb.group({
    document: ''
  });
  loadNewSale = false;
  constructor(private clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  searchClient(): void {
    this.clientService.getClientByDocument({
      document: this.searchForm.value.document
    })
    .subscribe((res: any) => {
      this.client = res;
    });
  }
}
