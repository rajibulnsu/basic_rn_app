import React from 'react';
import renderer from 'react-test-renderer';

import TestResultCard from './TestResultCard';

describe('TestResultCard', () => {
  it('should match the snapshot', () => {
    const item = {
      biomarker: 'biomarker',
      color: '#ddd',
      percentage: 0.25,
    };
    const testResultCard = renderer.create(<TestResultCard item={item}/>);

    expect(testResultCard).toMatchSnapshot();
  });
});
