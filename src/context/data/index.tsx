/** Important
 * useData is the simplest context for storing data of type T
 * for the purpose of prototyping
 */

import { useUniqueArray } from '@/context/array'
import { simpleContext } from '@/context/simple'

export function dataContext<T>() {

    /**
     * setArray is not available to prevent devs from making
     * custom state changing methods down the line,
     * use add or remove, or refactor dataContext
     */
    const useData = () => {
        const { array, add, remove } = useUniqueArray<T>()

        return {
            array,
            add,
            remove
        }
    }

    return simpleContext(useData)

}

export type DataContext<T> = ReturnType<typeof dataContext<T>>
