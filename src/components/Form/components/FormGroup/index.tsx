import React, { ReactElement } from 'react';
import { Props } from './types';
import clsx from 'clsx';
import styles from './styles.scss';


function FormGroup({
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        styles.formGroup,
        className,
    );


    return (
        <div className={classes} {...otherProps}>
            {children}
        </div>
    );


}


export default FormGroup;
