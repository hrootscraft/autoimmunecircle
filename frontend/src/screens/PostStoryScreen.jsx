import React from "react";
import { Row, Form, Button } from "react-bootstrap";

const PostStoryScreen = () => {
  return (
    <>
      <Row
        style={{ backgroundColor: "#FBF8F5" }}
        className="text-center p-3 mb-2"
      >
        <p>
          We like to think of 'Autoimmune Community' as a storybook; a
          storybook, that is bound with the threads of support and
          encouragement. Your story is no less than a saga itself. It is
          important to us and hence we will always await it. You are now, just a
          few clicks away from being someone's reason to face another day with a
          smile!
        </p>
      </Row>

      <Row
        style={{
          border: " 0.1rem solid #FBA474",
          padding: "2rem",
        }}
      >
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Can you tell us a bit about yourself ? *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Family, location, work etc."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tell us about your autoimmune story *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Symptoms, diagnosis, type, doctors, treatments etc."
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Tell us about some things that have helped you reduce symptoms *
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Lifestyle changes (diet or fitness or meditation), other remedies"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              How has having an autoimmune disease affected your life,
              positively and negatively ? *
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Share your highs and lows, and encouraging quotes that keep you going"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload your picture</Form.Label>
            <Form.Control type="file" accept="image/x-png,image/jpg" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I give permission for AUTOIMMUNECIRCLE to share this information on the @Autoimmunecircle Instagram feed and/or on their website."
            />
          </Form.Group>

          <Button style={{ backgroundColor: "#FBA474" }} type="submit">
            SUBMIT
          </Button>
        </Form>
      </Row>
    </>
  );
};

export default PostStoryScreen;
