import React from 'react';
import Items from './Items';
import './ReviewInfo.css';
import Rating from 'react-rating';


const ReviewInfo = ({feedback:{name, address,rating, description}}) => {
    return (
        <div className="feedback">
         <Items>
             <h4>{name}</h4>
             <h5>{address}</h5>
             <Rating
                         initialRating={rating}
                         emptySymbol="far fa-star icon-color"
                         fullSymbol="fas fa-star icon-color"
                         readonly

            />
             <p>{description}</p>
         </Items>
      </div>
    );
};

export default ReviewInfo;