import type { Request, Response } from "express";
import type { FlightUseCase } from "../../application/flight.useCase";

export class FlightController {
  constructor(private readonly flightUseCase: FlightUseCase) {
    this.findAllFlightsByDepartureDateAndReturnDate = this.findAllFlightsByDepartureDateAndReturnDate.bind(this)
  }

  public async findAllFlightsByDepartureDateAndReturnDate({ query }: Request, res: Response): Promise<void> {

    if (!(Boolean(query?.originCityId) && Boolean(query?.destinationCityId) && Boolean(query?.departureDate))) {
      res.status(400).send({ message: "Some required fields were not sent" });
    }

    const { originCityId = '', destinationCityId = '', departureDate = '' } = query;
    const returnDate = query?.returnDate ?? '';
    const departureDateString: string = departureDate.toString() ?? '';
    const returnDateString: string = returnDate.toString() ?? '';
    const flights = await this.flightUseCase.findAllFlightsByDepartureDateAndReturnDate(`${originCityId}`, `${destinationCityId}`, new Date(Date.parse(departureDateString)), new Date(Date.parse(returnDateString)));
    res.send({ flights });
  }
}