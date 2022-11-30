import React, { useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Person from "../components/Person";
import { useDispatch, useSelector } from "react-redux";
import { listStories } from "../actions/storyActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Link, useParams } from "react-router-dom";
import Paginate from "../components/Paginate";

const AiStoriesScreen = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const pageNumber = params.pageNumber || 1;

  const storyList = useSelector((state) => state.storyList);
  const { loading, error, stories, page, pages } = storyList;

  useEffect(() => {
    dispatch(listStories(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <>
      <p className="text-center mt-3">
        Check out these stories of people battling Autoimmune diseases. These
        brave faces will give you an insight into their diagnosis, their
        hardships, and their triumphs. They will definitely help you draw out
        ounces of inspiration and motivation. We are extremely grateful to
        everyone who has put themselves out there and shared with us such
        intimate experiences.
      </p>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {stories.map((person) => (
              <Col key={person._id} sm={12} md={6} lg={4} xl={3}>
                <Person person={person} />
              </Col>
            ))}
          </Row>
          <Paginate page={page} pages={pages} />
        </>
      )}
      <Row className="text-center my-5">
        <h3>IT'S YOUR TURN</h3>
        <p>
          The most valuable thing you posses is your story. Don't be afraid or
          ashamed to share it because that's what makes you unique. Share your
          story to create an impact today!
        </p>
        <Link to={`/post-story`}>SHARE YOUR STORY</Link>
        <p>It might help someone else...</p>
        <Link to={`/signup`}>
          <Image
            className="mt-2"
            width={80}
            height={80}
            src="/images/homepage/stamp.svg"
          />
        </Link>
      </Row>
      <Row className="text-center py-3" style={{ backgroundColor: "#FBF8F5" }}>
        <h4>PRIVACY</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
        </p>
      </Row>
    </>
  );
};

export default AiStoriesScreen;
