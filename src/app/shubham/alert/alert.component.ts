import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() Name:string=""
  @Input() Index:number=0
  @Output() onRegister = new EventEmitter<number>();
 


  constructor() { }





  ngOnInit(): void {
 }
  OnYes(){
    this.onRegister.emit(this.Index)
  }

}
