import { type RegionEntity } from './region.entity'

export class RegionValue implements RegionEntity {
  region_id: string
  description: string

  constructor({ id, description }: { id: string, description: string }) {
    this.region_id = id
    this.description = description
  }
}
