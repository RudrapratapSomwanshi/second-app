import { Component, OnInit } from '@angular/core';
import { SecondService } from '../second.service';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {
  newuser=false
data:any=[]

  constructor( private secondService:SecondService) { }
  ngOnInit(): void {
    this.get()
  }


  addname(name:string){
    this.data.push(name)
  }
  delete(i:number){
    this.data.splice(i,1)
  }
get(){
  this.secondService.getFollowupWithoutLimit().subscribe(result=>{
    console.log(result,"Result");
    
  })
}

}
