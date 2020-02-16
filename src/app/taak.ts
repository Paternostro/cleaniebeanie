// export const taken = [
//   {
//     name: 'Konijntjes',
//     timeLimit: 3,
//     effort: 4,
//     description: 'Konijnenhok opruimen'
//   },
//   {
//     name: 'GroenteAfval',
//     timeLimit: 14,
//     effort: 2,
//     description: 'Elke zondag avond kan het groente afval naar de straat gebracht worden.'
//   },
//   {
//     name: 'RestAfval',
//     timeLimit: 7,
//     price: 2,
//     description: 'Elke woensdag avond tot donderdagochtend voor 10:00 kan het restafval weggebracht worden'
//   }
// ];

import DateTimeFormat = Intl.DateTimeFormat;

export interface Taak {
  name: string;
  timeLimit: number;
  deadline: any;
  deadline_time: [string, number]; // day of week, hour of day
  timeLeft: number;
  daysLeft: number;
  hoursLeft: number;
  minutesLeft: number;
  effort: number;
  description: string;
  finished: boolean;
}
