import type { FlightRepository } from '../../domain/flight.repository';
import type { FlightEntity } from '../../domain/flight/flight.entity';

export class MockFlightRepository implements FlightRepository {

  async findAllFlightsByDepartureDateAndReturnDate(_originCityId: string, _destinationCityId: string, _departureDate: Date, _returnDate?: Date): Promise<FlightEntity[] | null> {
    const flights = [{
      flight_id: '1',
      isLocal: false,
      departureDate: new Date(2023, 5, 8, 9, 30, 0, 0),
    },
    {
      flight_id: '2',
      isLocal: false,
      departureDate: new Date(2023, 5, 8, 14, 50, 0, 0),
    }];
    return flights;
  }
}