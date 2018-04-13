import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Foo from './component';

const setUp = {};

describe('Foo', () => {
    beforeAll(() => {
        setUp.render = renderer.create(<Foo />);
        setUp.enzymeWrapper = shallow(<Foo />);
    });
    it('should correspond to the initial template', () => {
        const { render } = setUp;
        expect(render.toJSON()).toMatchSnapshot();
    });
    it('should contain 2 children nodes', () => {
        const { enzymeWrapper } = setUp;
        expect(enzymeWrapper.find('.Foo').children().length).toBe(2);
    });
});
