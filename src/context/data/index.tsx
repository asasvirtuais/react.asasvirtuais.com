import { createContext } from './create'
import { fieldsContext } from './fields'
import { singleContext } from './single'
import { storeContext } from './store'

export default function dataContext<T, D extends Partial<T> = Partial<T>>() {
    const store  = storeContext<Partial<D>>()
    const fields = fieldsContext<Partial<D>>()
    const single = singleContext<Partial<D>>(store)
    const create = createContext<Partial<D>>(store, fields)

    return {
        store,
        single,
        fields,
        create,
    }
}

export type DataContext<T> = ReturnType<typeof dataContext<T>>
