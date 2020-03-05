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

    it('it should call to getHotelCollection Api after being created', () => {
        const getHotelCollectionSpy = jest
          .spyOn(api, 'getHotelCollection');

       render(<HotelCollectionContainer />);
       expect(getHotelCollectionSpy).toHaveBeenCalled();   

    });

    it('it should return two hotel-cards when the api return two hotels ', async () => {
            // Arrange
            const hotel: apiModel.HotelEntityApi = {
                id: "123",
                type: "hotel",
                name: "despedida",
                created: new Date(),
                modified: new Date(),
                address1: "calle solitaria",
                airportCode: "5650",
                amenityMask: 121,
                city: "Malaga",
                confidenceRating: 2.2,
                countryCode: "29003",
                deepLink: "www.pepe.com",
                highRate: 4,
                hotelId: 77,
                hotelInDestination: true,
                hotelRating: 2.30,
                location: {
                  latitude: 45,
                  longitude: 25,
                },
                locationDescription: "muy comodo",
                lowRate: 125,
                metadata: {
                  path: "c/folder",
                },
                postalCode: 29003,
                propertyCategory: 111,
                proximityDistance: 222,
                proximityUnit: "km",
                rateCurrencyCode: "dede",
                shortDescription: "bonito",
                stateProvinceCode: "fef",
                thumbNailUrl: "foto",
                tripAdvisorRating: 3.2,
                tripAdvisorRatingUrl: "www.tripadvisor.com/pepe"
            }
            const getHotelCollectionSpy = jest
          .spyOn(api, 'getHotelCollection')
              .mockResolvedValue([hotel, hotel]);
          
              //Act    
          const { queryAllByTestId } = render(<HotelCollectionContainer />);
          await wait(); 

          // this is test id of the hotel-card
          const element = queryAllByTestId('hotelcard');
          // Assert
           expect(getHotelCollectionSpy).toHaveBeenCalled();
           expect(element).toHaveLength(2);
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
      const stub = jest.spyOn(hook, 'useHotelCollection').mockReturnValue({
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
