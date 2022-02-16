export const addRestaurant = restaurant => {
    return {
        type: 'ADD_RESTAURANT',
        payload: restaurant
    }
}

export const deleteRestaurant = id => {
    return {
        type: 'DELETE_RESTAURANT',
        restaurantId: id
    }
}