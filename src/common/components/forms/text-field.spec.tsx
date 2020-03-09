import * as React from 'react';
import { render } from '@testing-library/react';
import { TextField } from "./text-field";
import { FieldRenderProps, FieldInputProps } from 'react-final-form';


describe('text-field component test', () => {
    it('should display the component', () => {
        // Arrange
        const propsD = {
            input: {
                name: "campoTexto",
                value: "result",
            } as unknown as FieldInputProps<any, any>,
            meta:"",
            "data-testid": "textfieldcomponent"
        };

        // Act
        const { getByTestId } = render(<TextField {...propsD} />);
        const element = getByTestId('textfieldcomponent') as HTMLInputElement;

        // Assert
        expect(element.textContent).toEqual('');
        expect(element.hasAttribute('name')).toBeTruthy();
        expect(element.name).toEqual('campoTexto');

    });

    it('it should show the error', () => {
        // Arrange
        const propsDError = {
            input: {
                name: "campoTexto",
                value: "result",
            } as unknown as FieldInputProps<any, any>,
            meta: {
                submitError: "error",
                error: "Something wrong",
                touched: true,

            },
            "data-testid": "textfieldcomponent"
        };

        // Act
        const { getByText } = render(<TextField {...propsDError} />);
        const element = getByText('Something wrong') as InnerHTML;
        
        // Assert
        expect(element.innerHTML).toEqual("Something wrong");
    });
});