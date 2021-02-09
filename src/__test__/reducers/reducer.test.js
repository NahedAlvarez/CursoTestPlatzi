import reducer from "../../reducers";
import ProductMock from "../../__mocks__/ProductMock";


describe('Reducers', () => {
    test('Retornar initial State', () => {
        expect(reducer({},'')).toEqual({})
    })
    test('Add to Cart', () => {
        const state = {
            cart: []
        };
        const payload = ProductMock;

        const action = {
            type: 'ADD_TO_CART',
            payload
        } 
        const expected = {
            cart: [
                ProductMock,       
            ],
        };
        expect(reducer(state,action)).toEqual(expected)
    })
    
})


