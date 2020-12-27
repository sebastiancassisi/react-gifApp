import { React } from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifApp } from '../GifApp';

describe('Pruebas en GifApp.js', () => {
  test('Debe mostrarse correctamente', () => {
    const wrapper = shallow(<GifApp />);
    expect(wrapper).toMatchSnapshot();
  });
  test('Debe de mostrar una lista de categorias', () => {
    const categories = ['batman', 'ramones'];
    const wrapper = shallow(<GifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
});
