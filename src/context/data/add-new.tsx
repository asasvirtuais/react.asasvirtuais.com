import { PropsWithChildren } from 'react'
import { DataContext } from '.'
import { FieldsContext } from './fields'

type Props<T> = {
    Fields: FieldsContext<T>,
    Data: DataContext<T>,
}

export const useAddNew = function<T>( {
    Fields,
    Data
} : Props<T> ) {
    const FieldsContext = Fields.useContext()
    const DataContext = Data.useContext()
    const add = () => {
        DataContext.add(FieldsContext.data)
    }
    return {
        add,
    }
}
