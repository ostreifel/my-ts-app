import {JSX} from 'react';
import {ProductReview as ProductReviewData} from '../../../schema';
import Review from './Review/Review';
import './ReviewList.css';

interface ReviewListProps {
    reviews: ProductReviewData[];
}

function ReviewList({ reviews }: ReviewListProps): JSX.Element {
    return reviews.length > 0 ?
        <div className='ReviewList'>
            <h2>Reviews</h2>
            {reviews.map(review => <Review review={review} />)}
        </div> : <></>;
}

export default ReviewList;