import { createContext } from '@chakra-ui/react-context'
import { FunctionComponent, PropsWithChildren } from 'react'

type HK<P,R> = ( props: P ) => R
type HP<H> = H extends HK<infer P, any> ? P : never
type HR<H> = H extends HK<any, infer R> ? R : never

export function simpleContext<H extends HK<P,R>, P = HP<H>, R = HR<H>>( useHook: H ) {

    const [ContextProvider, useContext] = createContext<R>()

    const Provider : FunctionComponent<PropsWithChildren<P>> = ( { children, ...props } ) => {
        const context = useHook(props as PropsWithChildren<P>) as R
        return (
            <ContextProvider value={context}>
                {children}
            </ContextProvider>
        )
    }

    return {
        Provider,
        useContext,
    }
}
