import React, { Fragment } from "react";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import {
  Item,
  ItemContent,
  ItemHeader,
  ItemImage,
  Label,
  List
} from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}{" "}
        {attendees && attendees.length === 1 ? "Person" : "People"} Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
          {attendees &&
            attendees.map(attendee => (
              <Item key={attendee.id} style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}

                <ItemImage size="tiny" src={attendee.photoURL} />
                <ItemContent verticalAlign="middle" style={{ width: "10px" }}>
                  <ItemHeader as="h3">{attendee.name}</ItemHeader>
                </ItemContent>
              </Item>
            ))}
        </List>
      </Segment>
    </Fragment>
  );
};

export default EventDetailedSidebar;
