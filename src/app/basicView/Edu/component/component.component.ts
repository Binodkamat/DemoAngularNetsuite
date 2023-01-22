import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
  styles: ['p{color:red;}']
})
export class ComponentComponent implements OnInit {
tomato:string='rgb(111, 121, 164)'
r:number=0;
cli:boolean=false;
color:string="";
operation:string=""
  constructor() { }
  fun1(p:string,q:string,c:string):void{
    console.log(c)
    if(p && q){this.cli=true;} 
    this.color=c;
    this.operation="Added"
      this.r=Number(Number(p)+Number(q))
  }
  fun2(p:string,q:string,c:string):void{
    this.color=c
    if(p && q){this.cli=true;} 
    this.operation="Substrated"
      this.r=Number(Number(p)-Number(q))
  }
  fun3(p:string,q:string,c:string):void{
    this.color=c
    if(p && q){this.cli=true;} 
    this.operation="Divided first/Second"
      this.r=Number(Number(p)/Number(q))
  }
  fun4(p:string,q:string,c:string):void{
    this.color=c
    if(p && q){this.cli=true;} 
    this.operation="Multiplied"
      this.r=Number(Number(p)*Number(q))
  }
  ngOnInit(): void {
  }

}
