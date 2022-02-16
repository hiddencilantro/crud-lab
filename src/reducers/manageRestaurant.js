import cuid from 'cuid';

export default function manageRestaurants(state = [], action) {
    switch(action.type) {
        case "ADD_RESTAURANT":
            const restaurant = {
                ...action.payload,
                id: cuid()
            };
            return [...state, restaurant];
        case "DELETE_RESTAURANT":
            return state.filter(restaurant => restaurant.id !== action.restaurantId);
        default:
            return state;
    }
}
