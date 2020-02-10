import { Component, OnInit } from '@angular/core';
import { TAKEN } from '../mock-taken';
import { Taak } from '../taak';
import {interval} from 'rxjs';
import { timer } from 'rxjs';

import { Directive, Output, EventEmitter, Input, SimpleChange} from '@angular/core';



@Component({
  selector: 'app-taken-lijst',
  templateUrl: './taken-lijst.component.html',
  styleUrls: ['./taken-lijst.component.css']
})
export class TakenLijstComponent implements OnInit {
  taken = TAKEN;
  selectedTaak: Taak;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(taak: Taak): void {
    this.selectedTaak = taak;
  }

  setEndDate(timeLimit): Date {
    const date: Date = new Date();
    date.setDate(date.getDate() + timeLimit);
    return date;
  }

  // oberserableTimer(timeLimit) {
  //   const source = timer(1000, 2000);
  //   const abc = source.subscribe(val => {
  //     console.log(val, '-');
  //     this.subscribeTimer = timeLimit * 24 * 60 * 60 - val;
  //   });
  // }
}



