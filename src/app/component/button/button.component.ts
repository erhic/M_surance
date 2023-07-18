import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
//defined text of the button in the template
  textColor= 'white'

// get the color and text of and passing it as input in the button templ;ate, the values are from another component where the are placed in the button selector used there. should be a button attribute recognized by html
@Input() text?:string ;
@Input() color?:string 

// passsing event to other component in the selector
@Output() btnClick= new EventEmitter();
 
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
   this.btnClick.emit()
    
  }
}
