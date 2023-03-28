import { type DestinationCityEntity } from './destinationCity'

export class DestinationCityValue implements DestinationCityEntity {
  description: string
  distance: number
  durationTime: number
  originCityId: string
  destinationCityId: string

  constructor({ description, distance, durationTime, originCityId, destinationCityId }: { description: string, distance: number, durationTime: number, originCityId: string, destinationCityId: string }) {
    this.description = description
    this.distance = distance
    this.durationTime = durationTime
    this.originCityId = originCityId
    this.destinationCityId = destinationCityId
  }
}
