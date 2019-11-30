import React, { Fragment } from "react";
import {
  Button,
  Comment,
  CommentAction,
  CommentActions,
  CommentAuthor,
  CommentAvatar,
  CommentContent,
  CommentGroup,
  CommentMetadata,
  CommentText,
  Form,
  FormTextArea,
  Header,
  Segment
} from "semantic-ui-react";

const EventDetailedChat = () => {
  return (
    <Fragment>
      <Segment
        textAlign="center"
        attached="top"
        inverted
        color="teal"
        style={{ border: "none" }}
      >
        <Header>Chat about this event</Header>
      </Segment>

      <Segment attached>
        <CommentGroup>
          <Comment>
            <CommentAvatar src="/assets/user.png" />
            <CommentContent>
              <CommentAuthor as="a">Matt</CommentAuthor>
              <CommentMetadata>
                <div>Today at 5:42PM</div>
              </CommentMetadata>
              <CommentText>How artistic!</CommentText>
              <CommentActions>
                <CommentAction>Reply</CommentAction>
              </CommentActions>
            </CommentContent>
          </Comment>

          <Comment>
            <CommentAvatar src="/assets/user.png" />
            <CommentContent>
              <CommentAuthor as="a">Elliot Fu</CommentAuthor>
              <CommentMetadata>
                <div>Yesterday at 12:30AM</div>
              </CommentMetadata>
              <CommentText>
                <p>
                  This has been very useful for my research. Thanks as well!
                </p>
              </CommentText>
              <CommentActions>
                <CommentAction>Reply</CommentAction>
              </CommentActions>
            </CommentContent>
            <CommentGroup>
              <Comment>
                <CommentAvatar src="/assets/user.png" />
                <CommentContent>
                  <CommentAuthor as="a">Jenny Hess</CommentAuthor>
                  <CommentMetadata>
                    <div>Just now</div>
                  </CommentMetadata>
                  <CommentText>Elliot you are always so right :)</CommentText>
                  <CommentActions>
                    <CommentAction>Reply</CommentAction>
                  </CommentActions>
                </CommentContent>
              </Comment>
            </CommentGroup>
          </Comment>

          <Comment>
            <CommentAvatar src="/assets/user.png" />
            <CommentContent>
              <CommentAuthor as="a">Joe Henderson</CommentAuthor>
              <CommentMetadata>
                <div>5 days ago</div>
              </CommentMetadata>
              <CommentText>Dude, this is awesome. Thanks so much</CommentText>
              <CommentActions>
                <CommentAction>Reply</CommentAction>
              </CommentActions>
            </CommentContent>
          </Comment>

          <Form reply>
            <FormTextArea />
            <Button
              content="Add Reply"
              labelPosition="left"
              icon="edit"
              primary
            />
          </Form>
        </CommentGroup>
      </Segment>
    </Fragment>
  );
};

export default EventDetailedChat;
