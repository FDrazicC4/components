import React, { ReactElement } from 'react';
import { text } from '@storybook/addon-knobs';
import Label from '../Label';
import Card from '../Card';
import Button from '../Button';
import Placeholder from './index';


export default {
    component: Placeholder,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Placeholder',
};


export const General = (): ReactElement => {
    const errorGraphic: string = text('graphic', 'business');
    const title: string = text('title', 'No Content Found');
    const description: string = text('description', 'Action needs to be taken in order to see content here.');

    return (
        <Placeholder
            graphic={errorGraphic}
            title={title}
            description={description}
        />
    );
};


export const WithAction = (): ReactElement => {
    const childGraphic: string = text('graphic', 'business');
    const title: string = text('title', 'No content to display');
    const description: string = text('description', 'Please add new content to continue');

    return (
        <Placeholder
            graphic={childGraphic}
            title={title}
            description={description}
        >
            <Button isFluid onClick={() => console.log('clicked')}>Add Content</Button>
        </Placeholder>
    );
};


export const FullCustom = (): ReactElement => {
    const title: string = text('title', 'Custom Header');
    const body: string = text('body', 'This is a custom body describing a custom experience with other components');

    return (
        <Placeholder>
            <Card>
                <Card.Header>
                    <Card.Title>{title}</Card.Title>
                </Card.Header>
                <Card.Body>{body}</Card.Body>
            </Card>
        </Placeholder>
    );
};

