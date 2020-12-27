import { React } from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import '@testing-library/jest-dom';

describe('Pruebas en el componente AddCategory.js', () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategory={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test('Debe de mostrarse corectamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de cambiar la caja de texto', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });
  });

  test('No debe de postear la informacion onsubmit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategory).not.toHaveBeenCalled();
  });

  test('Debe de llamar setCatecory y limpiar la caja de texto', () => {
    const value = 'Hola mundo';
    wrapper.find('input').simulate('change', { target: { value } });
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    expect(setCategory).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
