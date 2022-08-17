import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has not specified a number of events to view', () => {
        });

        when('the user uses the app', () => {
            AppWrapper = mount(<App />);
        });

        then('by default the number of events shown should be 32', () => {
            AppWrapper.update();
            expect(AppWrapper.state('eventNumbers')).toEqual(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants a particular number of events shown on a page', () => {
        });

        when('the user changes the number of events to be displayed', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.find('.event-count-input').simulate('change', { target: { value: 12 } });
        });

        then('the user specified number of events will be displayed', () => {
            AppWrapper.update();
            const eventLength = AppWrapper.state('eventNumbers')
            expect(AppWrapper.find('.event')).toHaveLength(eventLength);
        });
    });
    
});