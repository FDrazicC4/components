import React from 'react';


/**
 * Utility type for converting arrays to usable types to help with maintaining Storybook
 */
// eslint-disable-next-line @typescript-eslint/generic-type-naming
export type ElementType<T extends readonly unknown[]> = T extends readonly (infer ElementType)[] ? ElementType : never;


/**
 * Color options to be used throughout the component library
 */
export type Colors = (
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'error'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
);


export interface StyledComponent {

    /**
     * Additional classes to add to the underlying element
     */
    className?: string,

    /**
     * A ref to attach to the underlying element
     */
    ref?: React.Ref<any>,

    /**
     * CSS properties to add to the underlying element
     */
    style?: React.CSSProperties,

}


export interface ParentComponent {

    /**
     * The content of the component
     */
    children?: React.ReactNode,

}


export interface StyledParentComponent extends StyledComponent {

    /**
     * The content of the component
     */
    children?: React.ReactNode,

}
