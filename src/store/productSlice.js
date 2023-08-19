export const fetchProductsRequest = () => ({
    type: 'FETCH_PRODUCTS_REQUEST'
})
export const fetchProductsSuccess = (data) => ({
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: data

})
export const fetchProductsFailure = (error) => ({
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error

})



export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(fetchProductsRequest())

        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()

        dispatch(fetchProductsSuccess(data))
    } catch (error) {
        dispatch(fetchProductsFailure(error.message))
    }
}

const initialState = {
    products: [],
    loading: false,
    error: null,
}



const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_PRODUCTS_SUCCESS':
            return {
                ...state,
                loading: false,
                products: action.payload
            }
        case 'FETCH_PRODUCTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


export default productReducer