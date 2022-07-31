import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Fade from "react-reveal/Fade";
import ReviewInfo from "../ReviewInfo/ReviewInfo";

import './UserReviews.css';

const UserReviews = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("https://enigmatic-citadel-92082.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        // setSpinner(false);
      });
  }, []);
  //   console.log(feedbacks)

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="feedbacks">
      <div className="feedbacksContent">
      <Fade bottom duration={2500}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>What people are saying about Car Galleria</h1>
        <div className="Apply">
          <Carousel breakPoints={breakPoints}>
            {feedbacks.map((feedback) => {
              return <ReviewInfo feedback={feedback}></ReviewInfo>;
            })}
          </Carousel>
        </div>
      </Fade>
      </div>
    </div>
  );
};

export default UserReviews;
