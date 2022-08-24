import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  newuser=false
data:any=[]

  constructor() { }
  ngOnInit(): void {
  }


  addname(name:string){
    this.data.push(name)
  }
  delete(i:number){
    this.data.splice(i,1)
  }


}
