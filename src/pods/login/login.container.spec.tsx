import * as React from 'react';
import * as history from 'react-router-dom';
import { render,fireEvent, wait } from '@testing-library/react';
import { LoginContainer } from "./login.container";

jest.mock('react-router-dom', () => ({
    useHistory: () => ({
      push: jest.fn(),
    }),
  }));

describe('login container test', () => {
    
    it('It should render the form without login and password', () => {    
        // Act
        const { getByTestId } = render(<LoginContainer />);
        const resultName = getByTestId("name") as HTMLInputElement;
        const resultPassword = getByTestId("password") as HTMLInputElement;
        // Assert
        expect(resultName.value).toEqual('');
        expect(resultPassword.value).toEqual('');
    });
});