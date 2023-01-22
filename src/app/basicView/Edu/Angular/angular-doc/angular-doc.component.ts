import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-doc',
  templateUrl: './angular-doc.component.html',
  styleUrls: ['./angular-doc.component.css']
})
export class AngularDocComponent implements OnInit {
val:string="Component";
  constructor() { }

  ngOnInit(): void {
  }

}
