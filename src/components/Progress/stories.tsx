import React, { ReactElement } from 'react';
import { select } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Progress from './index';


export default {
    component: Progress,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Components|Display/Progress',
};


export const General = (): ReactElement => {
    const variant = select('variant', ['circular', 'horizontal'], 'horizontal');
    const color = select('color', [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ], 'primary');
    const size = select('size', ['small', 'medium', 'large'], 'medium');

    return (
        <Progress
            color={color}
            size={size}
            variant={variant}
        />
    );
};


export const Default = (): ReactElement => <Progress />;
export const Horizontal = (): ReactElement => <Progress size="medium" />;
export const Circular = (): ReactElement => <Progress variant="circular" />;
