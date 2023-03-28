import type { Request, Response } from "express";
import type { LocationUseCase } from "../../application/location.useCase";

export class LocationController {
  constructor(private readonly locationUseCase: LocationUseCase) {
    this.findAllRegions = this.findAllRegions.bind(this)
    this.findAllCountriesByRegion = this.findAllCountriesByRegion.bind(this)
    this.findAllCitiesByCountry = this.findAllCitiesByCountry.bind(this)
    this.findAllAirportsByCity = this.findAllAirportsByCity.bind(this)
    this.findAllDestinationsByOriginCity = this.findAllDestinationsByOriginCity.bind(this)
  }

  public async findAllRegions(_req: Request, res: Response): Promise<void> {
    const regions = await this.locationUseCase.findAll();
    res.send({ regions });
  }

  public async findAllCountriesByRegion({ query }: Request, res: Response): Promise<void> {
    if (!query?.regionId) {
      res.status(400).send({ message: "Some required fields were not sent" });
    }

    const { regionId = '' } = query;
    const countries = await this.locationUseCase.findAllCountriesByRegion(`${regionId}`);
    res.send({ countries });
  }

  public async findAllCitiesByCountry({ query }: Request, res: Response): Promise<void> {
    if (!query?.countryId) {
      res.status(400).send({ message: "Some required fields were not sent" });
    }

    const { countryId = '' } = query;
    const cities = await this.locationUseCase.findAllCitiesByCountry(`${countryId}`);
    res.send({ cities });
  }

  public async findAllAirportsByCity({ query }: Request, res: Response): Promise<void> {
    if (!query?.cityId) {
      res.status(400).send({ message: "Some required fields were not sent" });
    }

    const { cityId = '' } = query;
    const airports = await this.locationUseCase.findAllAirportsByCity(`${cityId}`);
    res.send({ airports });
  }

  public async findAllDestinationsByOriginCity({ query }: Request, res: Response): Promise<void> {
    if (!query?.originCityId) {
      res.status(400).send({ message: "Some required fields were not sent" });
    }

    const { originCityId = '' } = query;
    const destinations = await this.locationUseCase.findAllDestinationsByOriginCity(`${originCityId}`);
    res.send({ destinations });
  }
}