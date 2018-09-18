import React from 'react';
import BottomBar from '../components/BottomBar'
import { mount, shallow } from 'enzyme';


describe('BottomBar', ()=>{

  let wrapper;

  beforeEach(()=>{

    wrapper = shallow(<BottomBar  />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {    
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('section').length).toBe(3);
    expect(wrapper.find('h4').length).toBe(3);

  });

})
