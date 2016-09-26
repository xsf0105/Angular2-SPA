import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-luffy',
  templateUrl: 'luffy.component.html',
  styleUrls: ['luffy.component.css'],
  template: `
    <div class="row">
      <div class="col s12">
        <h3 class="orange-text">Monkey D Luffy</h3>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <div class="card">
          <div class="card-image">
            <img class="responsive-img" src="/img/luffy.jpg">
          </div>
          <div class="card-content">
            <p class="orange-text">400,000,000 -.</p>
          </div>
        </div>
      </div>
  `
})
export class LuffyComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
