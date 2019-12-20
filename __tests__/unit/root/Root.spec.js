import React from 'react';
import Root from '../../../src/root/Root';
import renderer from 'react-test-renderer';

test('tests implementation', () => {
    const tree = renderer
        .create(<Root />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})