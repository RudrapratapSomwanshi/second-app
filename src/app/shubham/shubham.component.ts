import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-shubham',
  templateUrl: './shubham.component.html',
  styleUrls: ['./shubham.component.css']
})
export class ShubhamComponent implements OnInit {
  Data: any = []


  Name: string = ''
  Phone: string = ''
  toBeDeleted: string = ''
  toBeDeletedIndex: number=0;

  constructor() { }

  ngOnInit(): void {

  }

  addName() {
const detail={
  name:this.Name,
  phone:this.Phone
}
    this.Data.push(detail)
    this.Name = ''
    this.Phone = ''
    console.log(this.Data);


  }
  Delete(i: number) {
    if (this.Data.length == 1) {
      window.alert("Cannot Delete Last Element")

    } else {
      this.toBeDeleted = this.Data[i].name
      this.toBeDeletedIndex=i
    }

  }

  Edit(i: number) {
    this.Name = this.Data[i].name
    this.Phone=this.Data[i].phone
    this.Data.splice(i, 1)
  }

  
  DeleteFromChild(event:any){
    console.log(event);
    
    this.Data.splice(event, 1)
  }

}
