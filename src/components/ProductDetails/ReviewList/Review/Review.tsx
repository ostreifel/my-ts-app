import {JSX} from 'react';
import {ProductReview as ProductReviewData} from '../../../.././schema';

import './Review.css';

interface ReviewProps {
    review: ProductReviewData;
}

function Review({review}: ReviewProps): JSX.Element {
    return <div className="Review">{review.comment}</div>;
}

export default Review;