
export const getProducts = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'get',
        })
    }
}

export const addProduct = (product) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: product
        })
    }
}

export const deleteProduct = (productId) => {
    return (dispatch) => {
        dispatch({
            type: 'delete',
            payload: productId
        })
    }
}