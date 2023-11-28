import { useState } from 'react'

export function useArray<T>() {
    const [array, setArray] = useState<T[]>([])
    const add = (item: T) => setArray([...array, item])
    const remove = (item: T) => setArray(array.filter((i) => i !== item))
    return {
        array,
        setArray,
        add,
        remove,
    }
}

export function useUniqueArray<T>() {
    const [array, setArray] = useState<T[]>([])
    const add = (item: T) => setArray( prev => (
        prev.includes(item) ? [...prev] : [...prev, item]
    ) )
    const remove = (item: T) => setArray(array.filter((i) => i !== item))
    return {
        array,
        setArray,
        add,
        remove,
    }
}
