import { type CityEntity } from './city.entity'

export class CityValue implements CityEntity {
  city_id: string
  description: string

  constructor({ id, description }: { id: string, description: string }) {
    this.city_id = id
    this.description = description
  }
}
