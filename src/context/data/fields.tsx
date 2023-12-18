/** Important
 * Fields refer to the ephemeral state of a single data of type T
 */

import { useState } from 'react'
import { SingleContext } from './single'
import { simpleContext } from './../simple'
import { DataContext } from '.'

export function fieldsContext<T>() {

    const useFields = ( props: T ) => {

        const [data, setData] = useState<T>(props)

        return {
            data,
            setData
        }
    }

    return simpleContext(useFields)
}

export type FieldsContext<T> = ReturnType<typeof fieldsContext<T>>

export default fieldsContext
