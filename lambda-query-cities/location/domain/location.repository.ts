import type { AirportEntity } from "./airport/airport.entity";
import type { CityEntity } from "./city/city.entity";
import type { CountryEntity } from "./country/country.entity";
import type { DestinationCityEntity } from "./destination-city/destinationCity";
import type { RegionEntity } from "./region/region.entity";

export interface LocationRepository {

  findAll: () => Promise<RegionEntity[] | null>

  findAllCountriesByRegion: (regionId: string) => Promise<CountryEntity[] | null>

  findAllCitiesByCountry: (countryId: string) => Promise<CityEntity[] | null>

  findAllAirportsByCity: (cityId: string) => Promise<AirportEntity[] | null>

  findAllDestinationsByOriginCity: (originCityId: string) => Promise<DestinationCityEntity[] | null>
}