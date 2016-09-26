import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-default-route-view',
  templateUrl: 'default-route-view.component.html',
  styleUrls: ['default-route-view.component.css'],
  template: `
    <h2>This is my default view. You know, before you click any buttons. Whoo!</h2>
  `
})
export class DefaultRouteViewComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
