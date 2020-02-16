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
    // this.setDeadlines();
    this.setTimeLeft();
  }
  onSelect(taak: Taak): void {
    this.selectedTaak = taak;
  }

  findDayDifference(taak: Taak): number {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayDifference = 0;
    let day = days[taak.deadline.getDay()];
    let idx = 0;
    while (day !== taak.deadline_time[0]) {
      if (idx === 0) {
        idx = 6;
        dayDifference += 1;
      } else {
        idx -= 1;
        dayDifference += 1;
      }
      day = days[idx];
    }
    return dayDifference;
  }

  switchDoneUndone(taak: Taak): void {
    if (taak.finished) {
      taak.finished = false;
    } else {
      taak.finished = true;
    }
  }

  setDeadlines(): void {
    for (const taak of this.taken) {
      if (taak.timeLeft === 0) {
        this.setDeadline(taak);
      }
    }
  }

  setDeadline(taak: Taak): void {
    taak.deadline = new Date();
    taak.deadline.setDate(taak.deadline.getDate() + taak.timeLimit);
    taak.deadline.setHours(22);
    taak.deadline.setMinutes(0);
    taak.deadline.setSeconds(0);
    // Sommige taken moeten op een specifieke dag. Hier wordt ervoor gezorgd dat de deadline op die dag (en evt. tijd komt te staan)
    if (taak.deadline_time !== null) {
      const dayDifference = this.findDayDifference(taak);
      taak.deadline.setDate(taak.deadline.getDate() - dayDifference);
      taak.deadline.setHours(taak.deadline_time[1])
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



