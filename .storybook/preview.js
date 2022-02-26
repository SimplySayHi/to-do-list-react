
import '../src/App.scss';

import { MockedState } from './MockedState';
import { MockStore } from './MockStore';

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    Story => (
        <div style={{width: '100%'}}>
            <MockStore initialState={MockedState}>{<Story />}</MockStore>
        </div>
    )
];

// export const excludeStories = /.*MockedState$/
