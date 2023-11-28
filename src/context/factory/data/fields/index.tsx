/** Important
 * Fields refer to the ephemeral state of a single data of type T
 */

import { useState } from 'react'
import { SingleContext } from '../single'
import { simpleContext } from '../..'

export function fieldsContext<T>( {
    useContext: useSingle
} : SingleContext<T> ) {

    const useFields = () => {
        const { single } = useSingle()

        const [data, setData] = useState<T|undefined>(single)

        return {
            single,
            data,
            setData
        }
    }

    return simpleContext(useFields)
}

export type FieldsContext<T> = ReturnType<typeof fieldsContext<T>>
