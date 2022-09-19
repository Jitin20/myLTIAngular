import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-starcomponent',
  templateUrl: './starcomponent.component.html',
  styleUrls: ['./starcomponent.component.css']
})
export class StarcomponentComponent implements OnInit, OnChanges {

  cropWidth:number = 75;
  @Input() rating:number = 0;
  //to take data from container to the nested component  we use @Input decorator
@Output()  ratingClicked: EventEmitter<string> = 
  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void{
    this.cropWidth = this.rating * 75/5
  }
  onClick():void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
  }

}
