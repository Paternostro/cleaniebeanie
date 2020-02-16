import { Taak } from './taak';
import DateTimeFormat = Intl.DateTimeFormat;

export const TAKEN: Taak[] = [
  {
    name: 'Konijntjes',
    timeLimit: 3,
    deadline: null,
    deadline_time: null,
    timeLeft: 0,
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    effort: 4,
    description: 'Konijnenhok opruimen',
    finished: false,
  },
  {
    name: 'Groenteafval',
    timeLimit: 14,
    deadline: null,
    deadline_time: ['Sunday', 22],
    timeLeft: 0,
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    effort: 2,
    description: 'Elke zondag avond kan het groente afval naar de straat gebracht worden.',
    finished: false,
  },
  {
    name: 'Restafval',
    timeLimit: 7,
    deadline: null,
    deadline_time: ['Thursday', 22],
    timeLeft: 0,
    daysLeft: 0,
    hoursLeft: 0,
    minutesLeft: 0,
    effort: 2,
    description: 'Elke woensdag avond tot donderdagochtend voor 10:00 kan het restafval weggebracht worden',
    finished: false,
  }
];

