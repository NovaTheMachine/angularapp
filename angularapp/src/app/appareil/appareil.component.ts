import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.sass']
})
export class AppareilComponent implements OnInit {

  appareilName = 'Machine a laver'
  appareilstatus = 'eteint';

  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.appareilstatus;
  }

}
