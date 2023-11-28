import { useState } from 'react'

type IndexedObject<ID extends string | number | symbol = string, K extends string = 'id'> = Record<K, ID>
type IndexedObjectKey<T> = T extends IndexedObject<infer ID, infer K> ? K : never
type IndexedObjectId<T> = T extends IndexedObject<infer ID, infer K> ? ID : never

export function useIndex<
    T extends IndexedObject = IndexedObject<string, 'id'>,
    ID extends IndexedObjectId<T> = IndexedObjectId<T>,
    K extends IndexedObjectKey<T> = IndexedObjectKey<T>
>( idKey : K = 'id' as K ) {

    const [index, setIndex] = useState<Record<ID, T>>({} as Record<ID, T>)

    const add = (item: T) => setIndex( prev => ({
        ...prev,
        [item[idKey as K] as ID]: item
    }))

    const remove = (item: T) => setIndex( prev => {
        const newValue = { ...prev }
        delete newValue[item[idKey as K] as ID]
        return newValue
    })
    return {
        index,
        setIndex,
        add,
        remove,
    }
}
