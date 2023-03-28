import { type FlightEntity } from './flight.entity'

export class FlightValue implements FlightEntity {
  flight_id: string
  isLocal: boolean
  departureDate: Date
  returnDate?: Date

  constructor({ flightId, isLocal, departureDate, returnDate }: { flightId: string, isLocal: boolean, departureDate: Date, returnDate?: Date }) {
    this.flight_id = flightId
    this.isLocal = isLocal
    this.departureDate = departureDate
    this.returnDate = returnDate
  }
}
