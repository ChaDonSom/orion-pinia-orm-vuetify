import { Model } from '@tailflow/laravel-orion/lib/model'
import { DefaultPersistedAttributesWithSoftDeletes } from '@tailflow/laravel-orion/lib/types/defaultPersistedAttributesWithSoftDeletes'

export class Vehicle extends Model<{
    name: string
    color: string
    year: number
    make: string
    model: string
    body_type: string
    fuel_type: string
}, DefaultPersistedAttributesWithSoftDeletes<{}>> {
    public $resource(): string {
        return 'vehicles'
    }
}
