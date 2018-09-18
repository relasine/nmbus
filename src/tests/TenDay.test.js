import React from 'react';
import { mount, shallow } from 'enzyme';
import data from '../fakeapi'
import TenDay from '../components/TenDay'

describe('TenDay', ()=>{

  let props = data.data

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<TenDay data={props} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => { 
    expect(wrapper.find('article').length).toBe(1);

  });



});