import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-user',
  templateUrl: './count-user.component.html',
  styleUrls: ['./count-user.component.styl']
})
export class CountUserComponent implements OnInit {


  @Input() userMale: number;
  @Input() userFemale: number;

  @Output() typeOptionEvent: EventEmitter<string> = new EventEmitter<string>();
  selectedItem = 'total';

  constructor() { }

  ngOnInit(): void {
  }

  itemRadioSelected(): any {
    this.typeOptionEvent.emit(this.selectedItem);
  }
}
