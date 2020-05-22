import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.styl']
})
export class AsideComponent implements OnInit {
  faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
