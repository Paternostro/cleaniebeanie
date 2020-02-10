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
    this.setDeadlines();
    this.setTimeLeft();
  }
  onSelect(taak: Taak): void {
    this.selectedTaak = taak;
  }

  setDeadlines(): void {
    for (const taak of this.taken) {
      if (taak.timeLeft === 0) {
        taak.deadline = new Date();
        taak.deadline.setDate(taak.deadline.getDate() + taak.timeLimit)
        console.log(taak.deadline);
      }
    }
  }

  setTimeLeft() {
    for (const taak of this.taken) {
      setInterval(() => {
        taak.timeLeft = (taak.deadline).valueOf() - (new Date()).valueOf();
        taak.daysLeft = Math.floor(taak.timeLeft / 1000 / 60 / 60 / 24);
        taak.hoursLeft = Math.floor(taak.timeLeft / 1000 / 60 / 60 - (taak.daysLeft * 24));
        taak.minutesLeft = Math.floor(taak.timeLeft / 1000 / 60 - (taak.hoursLeft * 60) - (taak.daysLeft * 24 * 60));
        // console.log(taak.deadline, taak.deadline.valueOf());
        // const d: Date = new Date();
        // console.log(d, d.valueOf());
        console.log(taak.timeLeft / 60 / 60 / 1000);
      }, 1000);
    }

  }


}



