export interface Flight {
  id: string;
  number: string;
  departure: string;
  arrival: string;
  time: string;
  date: string;
  airline: string;
  arrivalDate: string; // Add this line
  arrivalTime: string; // Add this line
  difference: string;
}