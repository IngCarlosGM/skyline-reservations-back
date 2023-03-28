import { PrismaClient } from '@prisma/client'

import type { CityEntity } from "../../domain/city/city.entity";
import type { CountryEntity } from "../../domain/country/country.entity";
import type { LocationRepository } from "../../domain/location.repository";
import type { RegionEntity } from "../../domain/region/region.entity";
import type { AirportEntity } from "../../domain/airport/airport.entity";
import type { DestinationCityEntity } from '../../domain/destination-city/destinationCity';

const prisma = new PrismaClient()

export class PostgresRepository implements LocationRepository {

  async findAll(): Promise<RegionEntity[] | null> {
    const regions = await prisma.regions.findMany();
    return regions;
  }

  async findAllCountriesByRegion(regionId: string): Promise<CountryEntity[] | null> {
    const countries = await prisma.countries.findMany({
      where: {
        id_region_id: regionId
      }
    });
    return countries;
  }

  async findAllCitiesByCountry(countryId: string): Promise<CityEntity[] | null> {
    const cities = await prisma.cities.findMany({
      where: {
        id_country_id: countryId
      }
    });
    return cities;
  }

  async findAllAirportsByCity(cityId: string): Promise<AirportEntity[] | null> {
    const airports = await prisma.airports.findMany({
      where: {
        id_city_id: cityId
      }
    });
    return airports;
  }

  async findAllDestinationsByOriginCity(originCityId: string): Promise<DestinationCityEntity[] | null> {
    const destinations: DestinationCityEntity[] = await prisma.$queryRaw`SELECT Cities.description, FLIGHTS_ROUTE.distance, FLIGHTS_ROUTE.duration_time AS durationTime, FLIGHTS_ROUTE.id_city_origin_id AS originCityId, FLIGHTS_ROUTE.id_city_destination_id AS destinationCityId FROM Cities JOIN FLIGHTS_ROUTE ON Cities.city_id = FLIGHTS_ROUTE.id_city_destination_id WHERE FLIGHTS_ROUTE.id_city_origin_id=${originCityId}`;
    return destinations;
  }
}