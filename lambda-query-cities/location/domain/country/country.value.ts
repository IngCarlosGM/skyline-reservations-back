import { type CountryEntity } from './country.entity'

export class CountryValue implements CountryEntity {
  country_id: string
  description: string

  constructor({ id, description }: { id: string, description: string }) {
    this.country_id = id
    this.description = description
  }
}
