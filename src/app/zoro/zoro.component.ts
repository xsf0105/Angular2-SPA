import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-zoro',
  templateUrl: 'zoro.component.html',
  styleUrls: ['zoro.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="green-text text-darken-2">RORONOA · ZORO</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/zoro.jpeg">
          </div>
          <div class="card-content">
            <p class="green-text text-darken-2">赏金xxx.</p>
          </div>
        </div>
        </div>
      </div>
  `
})
export class ZoroComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
