import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let event, EventWrapper;
  beforeAll(() => {
    event = mockData[0];

    EventWrapper = shallow(<Event event={event} />);
  });

  test('render title in event item', () => {
    expect(EventWrapper.find('.event-title')).toHaveLength(1);
  });

  test('render info in event item', () => {
    expect(EventWrapper.find('.event-overview')).toHaveLength(1);
  });

  test('show details button in event item', () => {
    expect(EventWrapper.find('.show-hide-Details-button')).toHaveLength(1);
  });

  test('event details collapsed by default', () => {
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('click to expand event details', () => {
    EventWrapper.setState({ show: false});
    EventWrapper.find('.show-hide-Details-button').simulate('click');
    expect(EventWrapper.state('show')).toBe(true);
  });

  test('render with details shown including hide button', () => {
    EventWrapper.setState({show: true});
    expect(EventWrapper.find('.event-description').text()).toContain( event.description);
    expect(EventWrapper.find('.show-hide-Details-button')).toHaveLength(1);
  });

  test('click to collapse event details', () => {
    EventWrapper.setState({show: true});
    EventWrapper.find('.show-hide-Details-button').simulate('click');
    expect(EventWrapper.state('show')).toBe(false);
  });

  test('render with details hidden upon click hide event', () => {
    EventWrapper.setState({show: false});
    expect(EventWrapper.find('.event-description')).toHaveLength(0);
  });
});