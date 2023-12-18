/** Important
 * Fields refer to the ephemeral state of a single data of type T
 */

import { useState } from 'react'
import { SingleContext } from './single'
import { simpleContext } from './../simple'
import { DataContext } from '.'

export function fieldsContext<T>( single : SingleContext<T> ) {

    const useFields = () => {
        const context = single.useContext()

        const [data, setData] = useState<T>(context.value ?? {} as T)

        return {
            single,
            data,
            setData
        }
    }

    return simpleContext(useFields)
}

export type FieldsContext<T> = ReturnType<typeof fieldsContext<T>>
