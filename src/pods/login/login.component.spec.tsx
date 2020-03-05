import * as React from 'react';
import { render,fireEvent, wait } from '@testing-library/react';
import { LoginComponent } from "./login.component";

describe('login component test', () => {
    
    const initialLogin = {
        login: 'maria',
        password: 'pwd',
    }
    const onLogin =  jest.fn();

    it('It must show the login and password text field with the initial login', () => {    
            // Act
            const {getByTestId} = render(<LoginComponent onLogin={onLogin} initialLogin={initialLogin} />)
            const elementName = getByTestId('name') as HTMLInputElement;
            const elementPassword = getByTestId('password') as HTMLInputElement;
            // Assert
            expect(elementName.value).toEqual('maria');
            expect(elementPassword.value).toEqual('pwd')
    });

    it('When submit is clicked, onlogin must be called', async() => {

        // Act
        const { getByTestId } = render(<LoginComponent onLogin={onLogin} initialLogin={initialLogin} />)
        const elementButton = getByTestId('button');
        await wait(()=>fireEvent.click(elementButton));
        
        // Assert
        expect(onLogin).toHaveBeenCalled();
    });
});