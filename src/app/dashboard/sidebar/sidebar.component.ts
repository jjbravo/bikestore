import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { AccountService } from 'src/app/auth/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl'],
  animations: [
    trigger('slideIn', [
      state('in', style({ 'overflow-y': 'hidden' })),
      state('out', style({ 'overflow-y': 'hidden' })),
      transition('in => out', [style({ height: '*' }), animate('450ms ease-in-out', style({ height: 0 }))]),
      transition('out => in', [style({ height: '0' }), animate('450ms ease-in-out', style({ height: '*' }))])
    ])
  ]
})
export class SidebarComponent implements OnInit {

  isActive = false;
  collapsed = true;
  showMenu = '';
  pushRightClass = "push-right";
  stateMenu: boolean;

  @Output()
  collapsedEvent = new EventEmitter<boolean>();
  constructor(
    private router: Router,
    ) { 
    this.stateMenu = false;
    this.router.events.subscribe(value => {
      if (value instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
        this.toggleSidebar();
      }
    });
  }


  ngOnInit(): void {
    this.toggleCollapsed();
  }
  eventCalled() {
    this.isActive = !this.isActive;
}
  addExpandClass(element: any) {
    if (!this.collapsed) {
        if (element === this.showMenu) {
            this.showMenu = '0';
            this.stateMenu = false;
        } else {
            this.showMenu = element;
            this.stateMenu = true;
        }
    }
}
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    if (this.collapsed) {
      this.showMenu = '0';
      this.stateMenu = false;
    }

    this.collapsedEvent.emit(this.collapsed);
  }

  isToggled(): boolean {
    const dom: any = document.querySelector("body");
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar(): any {
    const dom: any = document.querySelector("body");
    dom.classList.toggle(this.pushRightClass);
  }
}
