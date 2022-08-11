import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}} />);
  });

  test('render number input is present', () => {
    expect(NumberOfEventsWrapper.find('.event-count-input')).toHaveLength(1);
  });

  test('default number in the input is 32', () => {
    expect(NumberOfEventsWrapper.find('.event-count-input').prop('value')).toBe(32);
  });

  test('change the number of events upon changing input state', () => {
    NumberOfEventsWrapper.setState({numOfEvents: 32});
    const eventObject = { target: { value: 10 } };
    NumberOfEventsWrapper.find('.event-count-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCounts')).toBe(10);
  });

  test('If input value is greater than 32 or less than 0 set value to 32', () => {
    NumberOfEventsWrapper.setState({numOfEvents: 32});
    const eventObject = { target: { value: 50 } };
    NumberOfEventsWrapper.find('.event-count-input').simulate('change', eventObject);
    expect(NumberOfEventsWrapper.state('eventCounts')).toBe(32);
  });
});