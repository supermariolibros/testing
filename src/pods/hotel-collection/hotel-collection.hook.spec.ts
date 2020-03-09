import { renderHook, act  } from '@testing-library/react-hooks';
import { useHotelCollection } from './hotel-collection.hook';
import { basePicturesUrl } from 'core';
import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';
import * as api from './hotel-collection.api';

describe('hotel-collection test', () => {
    it('When it is render the first time hotelCollection is empty', () => {
        // Act
        const { result } = renderHook(() => useHotelCollection());
        
        // Assert
        expect(result.current.hotelCollection).toEqual([]);
 
    });

    it('description',  async () => {
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
            locationDescription: "muy comomo",
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

        const expectedResult : viewModel.HotelEntityVm = {
            id: "123",
            picture: `${basePicturesUrl}foto`,
            name: "despedida",
            description: "bonito",
            rating: 2.30,
            address: "calle solitaria",
    } 

        const getHotelCollectionSpy = jest
          .spyOn(api, 'getHotelCollection')
              .mockResolvedValue([hotel, hotel]);


        // Act
        const { result, waitForNextUpdate } = renderHook(() => useHotelCollection());
        act(() => {result.current.loadHotelCollection()});
        await waitForNextUpdate();
        
        // Assert
        expect(result.current.hotelCollection).toEqual([expectedResult, expectedResult]);
    });
});