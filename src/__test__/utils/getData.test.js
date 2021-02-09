import getData from '../../utils/getData'


describe('fetch API', () => {
    
    beforeEach(()=>{
        fetch.resetMocks();
    })

    test('Llamar una API y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({data: '12345'}))

        getData('https://platzi.com/clases/1788-jest/25582-probar-peticiones-fetch/')
        .then((response)=>{
            expect(response.data).toEqual('12345');
        })
    
        expect(fetch.mock.calls[0][0]).toEqual('https://platzi.com/clases/1788-jest/25582-probar-peticiones-fetch/')
    
    })
    

})
