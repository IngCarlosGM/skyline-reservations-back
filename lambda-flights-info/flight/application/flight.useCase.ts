import type { FlightRepository } from "../domain/flight.repository";
import type { FlightEntity } from "../domain/flight/flight.entity";

export class FlightUseCase {

  constructor(private readonly flightRepository: FlightRepository) { }

  public async findAllFlightsByDepartureDateAndReturnDate(originCityId: string, destinationCityId: string, departureDate: Date, returnDate?: Date): Promise<FlightEntity[] | null> {
    const regions = await this.flightRepository.findAllFlightsByDepartureDateAndReturnDate(originCityId, destinationCityId, departureDate, returnDate);
    return regions;
  }
}
