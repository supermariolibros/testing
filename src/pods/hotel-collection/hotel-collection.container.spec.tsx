import * as React from 'react';
import { render, wait } from '@testing-library/react';
import { HotelEntityVm } from './hotel-collection.vm';
import { HotelCollectionContainer } from './hotel-collection.container';
import * as api from './hotel-collection.api';
import * as apiModel from './hotel-collection.api';
import * as hook from './hotel-collection.hook';



describe('hotell collection container test', () => {
    it('it should not render anything just after being created', () => {
        //Arrange  
        const { queryAllByTestId } = render(
                 <HotelCollectionContainer />);
        //Act
        // I use hotelcard because it is test-id assigned to the hotel card
        const hotelFromComponent = queryAllByTestId('hotelcard');
       // Assert
        expect(hotelFromComponent).toHaveLength(0);

    });

    it(' loadHotelCollection should be called, and the element from hotelcollection should be rendered', () => {
      // Arrange
      const hotelCollection: HotelEntityVm[] = [{
        id: "146",
        picture: "www.picture.es",
        name: "La parada",
        description: "es preziozo",
        rating: 4,
        address: "calle perdida"},
        {
          id: "789",
          picture: "www.photo.es",
          name: "escandalo",
          description: "por que te lo merece",
          rating: 5,
          address: "en mitad er poligono"},
      ];
      const loadHotelCollectionSpy = jest.fn();
      jest.spyOn(hook, 'useHotelCollection').mockReturnValue({
        hotelCollection,
        loadHotelCollection: loadHotelCollectionSpy,
      });

      // Act
      const {queryAllByText} = render(<HotelCollectionContainer />);
      const result = queryAllByText("La parada");

      // Assert
      expect(result).toHaveLength(1);
      expect(loadHotelCollectionSpy).toHaveBeenCalled();
    });
});
