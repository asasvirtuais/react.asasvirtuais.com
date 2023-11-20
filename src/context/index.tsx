import { createContext } from '@chakra-ui/react-context'
import { FunctionComponent, PropsWithChildren } from 'react'

export function simpleContext<D extends (...p: any) => any>( useHook: D ) {

    const [ContextProvider, useContext, Context] = createContext<D>()

    const Provider : FunctionComponent<PropsWithChildren<{}>> = ( { children } ) => {
        const context = useHook()
        return (
            <ContextProvider value={context}>
                {children}
            </ContextProvider>
        )
    }

    return {
        Context,
        Provider,
        useContext,
    }
}
