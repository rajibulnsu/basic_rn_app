import React from 'react';
import renderer from 'react-test-renderer';

import BloodTestCard from './BloodTestCard';

describe('BloodTestCard', () => {
  it('should match the snapshot', () => {
    const item = {
      title: 'title',
      date: '01.01.2019',
    };
    const bloodTestCard = renderer.create(<BloodTestCard item={item} onPress={() => {}}/>);

    expect(bloodTestCard).toMatchSnapshot();
  });
});
