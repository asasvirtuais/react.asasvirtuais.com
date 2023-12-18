import { DataContext } from '.'
import { simpleContext } from '../simple'
import { useBoolean } from '@chakra-ui/react'
import { SingleContext } from './single'
import { FieldsContext } from './fields'
import { StoreContext } from './store'
import { useCallback } from 'react'

export function createContext<T>(
    store: StoreContext<T>,
    fields: FieldsContext<T>
) {

    function useCreate() {
        const add = store.useContext().add
        const data = fields.useContext().data
        const submit = useCallback(() => (
            add(data)
        ), [data])

        return {
            fields: fields.useContext(),
        }
    }

    return simpleContext( useCreate )
}

export type CreateContext<T> = ReturnType<typeof createContext<T>>
