import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Senace';
  pushValue;
  array = [];
  poppedValues = [];
  push(val) {
    if (val.toString().trim() !=="") {
      this.array.push(val);
      document.querySelector('.stack').setAttribute('style', `grid-template-rows: repeat(${this.array.length},1fr)`);
      document.querySelector('.list').setAttribute('style', `grid-template-columns: repeat(${this.poppedValues.length},1fr)`);
      document.querySelector('.arrayValues').setAttribute('style', `grid-template-columns: repeat(${this.array.length},1fr)`);
    }
  }

  pop() {
    if (this.array.length > 0) {
      this.poppedValues.push(this.array.pop());
      document.querySelector('.stack').setAttribute('style', `grid-template-rows: repeat(${this.array.length},1fr)`);
      document.querySelector('.list').setAttribute('style', `grid-template-columns: repeat(${this.poppedValues.length},1fr)`);
      document.querySelector('.arrayValues').setAttribute('style', `grid-template-columns: repeat(${this.array.length},1fr)`);
    }
  }

  shift() {
    if (this.array.length > 0) {
      this.poppedValues.push(this.array.shift());
      document.querySelector('.stack').setAttribute('style', `grid-template-rows: repeat(${this.array.length},1fr)`);
      document.querySelector('.list').setAttribute('style', `grid-template-columns: repeat(${this.poppedValues.length},1fr)`);
      document.querySelector('.arrayValues').setAttribute('style', `grid-template-columns: repeat(${this.array.length},1fr)`);
    }
  }
}
