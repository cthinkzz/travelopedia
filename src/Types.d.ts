export interface Column {
  name: string;
  map: string;
  type?: string;
  dataType?: string;
}

export interface Row {
  id: number;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
}
