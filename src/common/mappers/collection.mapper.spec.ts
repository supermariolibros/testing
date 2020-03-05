import { mapToCollection } from "./collection.mapper";

describe('collection mapper test', () => {
    xit('it should return the transformation of a collection with the given function', () => {
        // Arrange
        const collectionA = [1,2,3,4];
        const expectedResult = [2,4,6,8];
        const mapFn= (a: number) => 2*a;
        // Act
        const result = mapToCollection(collectionA, mapFn);
        // Assert
        expect(result).toEqual(expectedResult)
    });
    xit('it should return empty if a not colletion is introduced as a paramn', () => {
       // Arrange
       const collectionA = undefined;
       const expectedResult = [];
       const mapFn= (a: number) => 2*a;
       // Act
       const result = mapToCollection(collectionA, mapFn);
       // Assert
       expect(result).toEqual(expectedResult)
    });
});