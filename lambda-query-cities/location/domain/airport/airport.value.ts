import { type AirportEntity } from './airport.entity'

export class AirportValue implements AirportEntity {
  airport_id: string
  description: string

  constructor({ id, description }: { id: string, description: string }) {
    this.airport_id = id
    this.description = description
  }
}
