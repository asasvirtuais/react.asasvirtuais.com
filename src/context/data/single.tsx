/** Important
 * Single is to refer to a single instance of data of type T,
 * - Stored in the context of that DataContext<T>
 * - Can only be updated by updating that DataContext<T>
 * 
 * Obs: Identification would be done by id in a more complex system,
 * but for the purpose of prototyping, we will use the data itself
 * until we cause a loop in React, then refactoring should be done
 */

import { useMemo } from 'react'
import { DataContext } from '.'
import { simpleContext } from '../simple'

export function singleContext<T>(
    { useContext: useData } : DataContext<T>
) {

    const useSingle = ( id: T ) => {
        const { array } = useData()
        const single = useMemo( () => array.find( item => item === id ), [id] )
        return {
            single,
        }
    }

    return simpleContext( useSingle )
}

export type SingleContext<T> = ReturnType<typeof singleContext<T>>
