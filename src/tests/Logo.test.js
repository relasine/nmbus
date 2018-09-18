import React from 'react';
import Logo from '../components/Logo'
import { mount, shallow } from 'enzyme';


describe('Logo', ()=>{

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Logo />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {   
    expect(wrapper.find('h2').length).toBe(1);

    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
  });

})
