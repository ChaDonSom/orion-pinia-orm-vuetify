import { Model } from '@tailflow/laravel-orion/lib/model'
import { Repository as PiniaRepository, Model as PiniaModel } from 'pinia-orm'

export class Repository extends PiniaRepository {
    saveFromOrion<T extends Model, U extends PiniaModel>(resources: T[], model: new (...args: any[]) => U) {
        return this.repo(model).save(
            resources.map(resource => ({
                ...resource.$attributes,
                ...resource.$relations,
                id: resource.$getKey(),
                orion: resource,
            }))
        )
    }
}
