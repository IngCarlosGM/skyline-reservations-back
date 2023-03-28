import type { AirportEntity } from "../domain/airport/airport.entity";
import type { CityEntity } from "../domain/city/city.entity";
import type { CountryEntity } from "../domain/country/country.entity";
import type { DestinationCityEntity } from "../domain/destination-city/destinationCity";
import type { LocationRepository } from "../domain/location.repository";
import type { RegionEntity } from "../domain/region/region.entity";

export class LocationUseCase {

  constructor(private readonly locationRepository: LocationRepository) { }

  public async findAll(): Promise<RegionEntity[] | null> {
    const regions = await this.locationRepository.findAll();
    return regions;
  }

  public async findAllCountriesByRegion(regionId: string): Promise<CountryEntity[] | null> {
    const countries = await this.locationRepository.findAllCountriesByRegion(regionId);
    return countries;
  }

  public async findAllCitiesByCountry(countryId: string): Promise<CityEntity[] | null> {
    const cities = await this.locationRepository.findAllCitiesByCountry(countryId);
    return cities;
  }

  public async findAllAirportsByCity(cityId: string): Promise<AirportEntity[] | null> {
    const airports = await this.locationRepository.findAllAirportsByCity(cityId);
    return airports;
  }

  public async findAllDestinationsByOriginCity(originCityId: string): Promise<DestinationCityEntity[] | null> {
    const destinations = await this.locationRepository.findAllDestinationsByOriginCity(originCityId);
    return destinations;
  }
}
