import { listA, listB } from './model/data';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  listA: listA[];
  listB: listB[];
  textA;
  selected;
  valueCheck =  0;

  constructor() {

    this.listA = [
      {
        optionValue : 'hello',
      },
      {
        optionValue : 'world',
      },
      {
        optionValue : 'testing',
      }
    ];
    this.listB = [];

   
  }
  ngOnInit() {
  }

  addA() {
    const newList: listA = {
      optionValue: this.textA,
    };
    this.listA.push(newList);
    
  }

  addToB() {
    const newListB: listB = {
      optionValue: this.selected,
    };
    this.listB.push(newListB);
    this.listB.sort((a, b) => (a.optionValue < b.optionValue ? -1 : 1));

    let removeIndex = this.listA.map(function(item) { return item.optionValue; }).indexOf(this.selected);
    this.listA.splice(removeIndex, 1);
  }

  onOptionSelected(event) {
    this.selected = event.optionValue;
    console.log(this.selected);

  }

  addAllintoB() {

   this.listA.sort((a, b) => (a.optionValue < b.optionValue ? -1 : 1));
   this.listA.forEach(element => {
      const newListA: listA = {
        optionValue: element.optionValue,
      };
      console.log(element.optionValue);
      this.listB.push(newListA);
    });
   this.listA.splice(0, this.listA.length);
  }

  moveUp() {

    

  }
}

