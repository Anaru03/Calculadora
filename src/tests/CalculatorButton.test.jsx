import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CalculatorButton from '@components/CalculatorButton';

describe('CalculatorButton', () => {
  it('debería llamar al manejador de clic cuando se hace clic en el botón', () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <CalculatorButton id="test-button" className="test-class" onClick={onClick}>
        Test Button
      </CalculatorButton>
    );

    const button = getByText('Test Button');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);

    expect(onClick).toHaveBeenCalledWith('test-button');
  });
});
