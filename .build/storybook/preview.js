import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import StylesDecorator from './styles-decorator';
import './assets/css/theme.css';


addDecorator(withKnobs);
addDecorator(StylesDecorator);


configure(
    [
        // Ensure we load Intro First
        require.context('../../src/docs', true, /Intro.stories.mdx/),
        require.context('../../src/docs', true, /GettingStarted.stories.mdx/),
        require.context('../../src/docs', true, /Icon.stories.mdx/),
        require.context('../../src', true, /stories\.(ts|tsx|mdx)$/),
    ],
    module
);
