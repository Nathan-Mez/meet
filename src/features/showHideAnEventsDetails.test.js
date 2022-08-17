import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('The event element stays collapsed by default.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has opened a page', () => {
            AppWrapper = mount(<App />);
        });

        when('the user does not select an event', () => {
        });

        then('the events element stays collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .show-details')).toHaveLength(0);
        });
    });

    test('The user can exapand event to see details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user wants more details on a particular event', () => {
            AppWrapper = mount(<App />);
        });
    
        when('the user select that event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .show-hide-Details-button').at(0).simulate('click');
        });

        then('the details on that event are displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .show-details')).toBeDefined();
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        given('the user has opened an event details element', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .show-hide-Details-button').at(0).simulate('click');
        });

        when('the user select that event', () => {
            AppWrapper.update();
            AppWrapper.find('.event .show-hide-Details-button').at(0).simulate('click');
        });

        then('the event element get collapsed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .show-details')).toHaveLength(0);
        });
    });

});