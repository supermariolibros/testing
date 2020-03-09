import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCard } from "./hotel-card.component";
import { HotelEntityVm } from '../hotel-collection.vm';
import '@testing-library/jest-dom/extend-expect';

describe('hotel card component test', () => {
    it('it should render all the field of an hotel', () => {
        // Arrange
        const hotel: HotelEntityVm = {
            id: "123",
            picture: 'www.foto.es',
            name: "despedida",
            description: "bonito",
            rating: 2.30,
            address: "calle solitaria",
    }

        // Act
        const { getByText } = render(<HotelCard hotel={hotel} />);
        const elementName = getByText(hotel.name);
        const elementDescription = getByText(hotel.description);
        const elementRating =  getByText(hotel.rating.toString()); 

        // Assert
        expect(elementName).toBeInTheDocument();
        expect(elementDescription).toBeInTheDocument();
        expect(elementRating).toBeInTheDocument();
    });
});