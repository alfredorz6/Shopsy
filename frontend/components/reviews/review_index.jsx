import {connect} from 'react-redux';
import {selectReviews} from '../../selectors/selectors';
import {fetchReviews} from '../../actions/reviews_actions';
import React from 'react'
import LoadingIcon from '../loading';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import {FaUserAlt} from 'react-icons/fa'

class ReviewsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            reviewsPerPage: 5
        };
        this.compareReviews = this.compareReviews.bind(this)
    }

    componentDidMount() {
        this
            .props
            .fetchReviews(this.props.productId);
    }

    compareReviews(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    render() {
        let {reviews} = this.props;
        if (!reviews) {
            return (<LoadingIcon/>)
        }

        if (reviews.length === 0){
            return (
                <div className="no-review">
                    No reviews yet.
                </div>
            )
        }
        // Setup for display
        
        const reviewsArrayCopy = reviews.slice(0).sort(this.compareReviews)

        // Calc for average rating
        let reviewsRating = 0;
        reviews.forEach(review => {
            reviewsRating = review.rating + reviewsRating;
        });
        let ratingAverage = reviews.length
            ? reviewsRating / reviews.length
            : reviewsRating;


        return (
            <div className="reviews-index">
                <div className="reviews-index-title">
                    <h3>Reviews</h3>
                    <span>
                        <StarRatings
                            rating={ratingAverage}
                            starDimension="25px"
                            starSpacing="4px"
                            starRatedColor='#f2b01e'
                            isAggregateRating={true}/>
                    </span>
                    <div className="show-comment-container">
                        <ul>
                            {reviewsArrayCopy.map((review, idx) => 
                                (<li key={idx}>
                                    <div className="show-comment-user">
                                        <FaUserAlt/> {review.userName}:
                                    </div>
                                    <div className="show-comment-text">
                                        {review.body}
                                    </div>
                                    <br></br>
                                </li>))
                            }
                        </ul>
                    </div>
                </div>

               
            </div>
        )
    }
}

const mstp = state => {
    return {
        reviews: selectReviews(state.entities.reviews)
    };
};

const mdtp = dispatch => {
    return {
        fetchReviews: productId => dispatch(fetchReviews(productId))
    };
};

export default connect(mstp, mdtp)(ReviewsIndex);