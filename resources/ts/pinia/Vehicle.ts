import { Model } from 'pinia-orm'
import { Str, Uid } from 'pinia-orm/dist/decorators'

export default class Vehicle extends Model {
    // entity is a required property for all models.
    static entity = 'vehicles'

    @Uid() declare id: string
    @Str('') declare name: string
    @Str('') declare color: string
    @Str('') declare year: string
    @Str('') declare make: string
    @Str('') declare model: string
    @Str('') declare body_type: string
    @Str('') declare fuel_type: string
}
