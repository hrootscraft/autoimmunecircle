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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
      <Row
        style={{ backgroundColor: "#FBF8F5" }}
        className="text-center my-5 py-5"
      >
        <h3>IT'S YOUR TURN</h3>
        <p style={{ marginBottom: "2rem" }}>
          The most valuable thing you posses is your story. Don't be afraid or
          ashamed to share it because that's what makes you unique.
          <br />
          Share your story to create an impact today!
        </p>
        {userInfo && userInfo._id ? (
          <Link to={`/users/${userInfo._id}`}>
            <Image src={`/images/buttons/share-story.svg`} />
          </Link>
        ) : (
          <Link to={`/login`}>
            <Image src={`/images/buttons/share-story.svg`} />
          </Link>
        )}

        <p>It might help someone else...</p>
      </Row>
      <Row className="text-center mt-5 pt-5">
        <h4>PRIVACY</h4>
        <p>
          All the names and photos, shared by people on their stories, are taken
          and uploaded strictly by user consent. Autoimmune Circle holds the
          right to modify inappropriate content or images uploaded on this site.
          The content is for informational purposes only and not to be
          substituted for medical advice.
        </p>
      </Row>
    </>
  );
};

export default AiStoriesScreen;
