import cuid from 'cuid';

export default function manageReview(state = [], action) {
    switch(action.type) {
        case "ADD_REVIEW":
            const review = {
                ...action.review,
                id: cuid()
            };
            return [...state, review];
        case "DELETE_REVIEW":
            return state.filter(review => review.id !== action.reviewId);
        default:
            return state;
    }
}
