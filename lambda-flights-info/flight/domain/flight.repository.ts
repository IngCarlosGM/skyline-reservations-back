import type { FlightEntity } from "./flight/flight.entity";

export interface FlightRepository {

  findAllFlightsByDepartureDateAndReturnDate: (originCityId: string, destinationCityId: string, departureDate: Date, returnDate?: Date) => Promise<FlightEntity[] | null>
}