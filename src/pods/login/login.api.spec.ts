import * as React from 'react';
import { validateCredentials } from "./login.api";


describe('login.api test', () => {
    it('It should return true with the right credentials', () => {
        // Arrange
        // Act
        const result =validateCredentials("admin","test");
        // Assert
        expect(result).toBeTruthy();
    });
    it('It should return false with the wrong credentials', () => {
        // Arrange
        // Act
        const result =validateCredentials("pepe","123");
        // Assert
        expect(result).toBeTruthy();
    });
});