export const addReview = review => {
    return {
        type: 'ADD_REVIEW',
        review: review
    }
}

export const deleteReview = id => {
    return {
        type: 'DELETE_REVIEW',
        reviewId: id
    }
}