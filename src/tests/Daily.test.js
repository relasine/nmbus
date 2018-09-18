import React from 'react';
import Daily from '../components/Daily'
import { mount, shallow } from 'enzyme';
import data from '../fakeapi';


describe('Daily', ()=>{

  let wrapper;

  beforeEach(()=>{
    let props = data.data

    wrapper = shallow(<Daily data={props.forecast.simpleforecast.forecastday[0]} />)
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h3').length).toBe(1);
    expect(wrapper.find('section').length).toBe(1);

  });

  it('should have props', () => {
    expect(wrapper.props().children[2].props.children[0]).toEqual('51')


  })
})
