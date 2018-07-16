import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cine-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show = false;
  toggleCollapse() {
    this.show = !this.show;
  }

  constructor() { }

  ngOnInit() {
  }

}
