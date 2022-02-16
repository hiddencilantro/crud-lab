import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';
import { addReview, deleteReview } from '../actions/reviews';

class ReviewsContainer extends Component {

  render() {
    const reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurantId={this.props.restaurantId} />
        <Reviews reviews={reviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer);
