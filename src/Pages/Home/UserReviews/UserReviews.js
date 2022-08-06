import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";

import Fade from "react-reveal/Fade";
import { supabase } from "../../../DB/supabaseClient";
import ReviewInfo from "../ReviewInfo/ReviewInfo";

import './UserReviews.css';

const UserReviews = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchReviews = async () => {
    let { data: feedbacks, error } = await supabase
      .from("reviews")
      .select("*")
      .order("id", { ascending: false });
    if (error) {
      console.log("error", error);
    }
    else {
      console.log("data from supabase", feedbacks);
      setFeedbacks(feedbacks);
    }
  };
  useEffect(() => {
    fetchReviews();
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
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>What people are saying about Elite cars</h1>
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
