import { createContext } from './create'
import { fieldsContext } from './fields'
import { singleContext } from './single'
import { storeContext } from './store'

export function dataContext<T>() {
    const store  = storeContext<T>()
    const single = singleContext<T>(store)
    const fields = fieldsContext<T>(single)
    const create = createContext<T>(store, fields)

    return {
        store,
        single,
        fields,
        create,
    }
}

export type DataContext<T> = ReturnType<typeof dataContext<T>>
