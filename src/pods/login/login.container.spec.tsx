import * as React from 'react';
import { render,fireEvent, wait } from '@testing-library/react';
import { LoginContainer } from "./login.container";
import * as init from './login.vm';
import * as valid from './login.api';

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
    it('description', async() => {
      // Arrange
      const mockValidation = jest.spyOn(valid,'validateCredentials').mockResolvedValue(true);
      jest.spyOn(init, 'createEmptyLogin').mockReturnValue({login: "maria", password: "1234"});
      // Act
      const { getByTestId } = render(<LoginContainer />);
      const elementButton = getByTestId('button');
      await wait(()=>fireEvent.click(elementButton));
      
      const resultName = getByTestId("name") as HTMLInputElement;
        const resultPassword = getByTestId("password") as HTMLInputElement;
        // Assert
        expect(resultName.value).toEqual('maria');
        expect(resultPassword.value).toEqual('1234');
      expect(elementButton).toBeTruthy();
    });


});