import React from 'react/addons';
import HelloWorld from '../src/app/components/HelloWorld.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;
let shallowRenderer = TestUtils.createRenderer();

describe('HelloWorld component', () => {
  shallowRenderer.render(<HelloWorld/>);
  let HelloWorldComponent = shallowRenderer.getRenderOutput();

  it('should render a paragraph', () => {
    expect(HelloWorldComponent.type).to.equal('p');
  });

  it('should contain a Hello World string', () => {
    expect(HelloWorldComponent.props.children).to.equal('Hello World')
  });
});
