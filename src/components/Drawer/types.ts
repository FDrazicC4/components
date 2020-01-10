import { ReactNode } from 'react';


export type Anchors = 'top' | 'right' | 'bottom' | 'left';


export interface Props {

    /**
     * Where to position the drawer
     */
    anchor: Anchors,

    /**
     * Children passed to the component (JSX, String)
     */
    children?: ReactNode,

    /**
     * Custom class to provide component
     */
    className?: string,

    /**
     * Prop that determines if the drawer is open or closed
     */
    isOpen?: boolean,
}
