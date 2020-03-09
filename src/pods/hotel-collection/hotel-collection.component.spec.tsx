import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from './hotel-collection.vm';
import '@testing-library/jest-dom/extend-expect';

describe('Hotel card component test', () => {
    it('it should render all the field of an hotel', () => {
        // Arrange
        const hotel1: HotelEntityVm = {
            id: "123",
            picture: 'www.foto.es',
            name: "despedida",
            description: "bonito",
            rating: 2.30,
            address: "calle solitaria",
    }
    const hotel2: HotelEntityVm = {
        id: "456",
        picture: 'www.foto.es',
        name: "bienvenida",
        description: "feo",
        rating: 2.50,
        address: "calle transitada",
}
const hotels: HotelEntityVm[] = [hotel1, hotel2];

// Act
const { getByText } = render(<HotelCollectionComponent hotelCollection={hotels} />);
const elementName = getByText(hotel1.name);
const elementDescription = getByText(hotel2.description);
const elementRating =  getByText(hotel2.rating.toString()); 

// Assert
expect(elementName).toBeInTheDocument();
expect(elementDescription).toBeInTheDocument();
expect(elementRating).toBeInTheDocument();
    });
});