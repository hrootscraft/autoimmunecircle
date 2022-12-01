import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { listTopStories } from "../actions/storyActions";

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const storyTop = useSelector((state) => state.storyTop);
  const { loading, error, users } = storyTop;

  useEffect(() => {
    dispatch(listTopStories());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel className="mt-3" pause="hover" variant="dark">
      {users.map((user) => (
        <Carousel.Item style={{ backgroundColor: "white" }} key={user._id}>
          <Link to={`/ai-stories/${user._id}`}>
            <Image src={user.photo} alt={user.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h4>
                {user.name} <br /> {user.disease}
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
