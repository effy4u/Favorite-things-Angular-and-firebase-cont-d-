import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kings is working';
  favColor ="blue";
setColor(selectedColor:string):void{
  this.favColor=selectedColor;
}
updateColor(): void{
  console.log('You have updated the ' );
  }
}