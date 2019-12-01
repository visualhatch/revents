import React, { useState } from "react";
import {
  Button,
  Grid,
  GridColumn,
  Icon,
  Segment,
  SegmentGroup
} from "semantic-ui-react";
import EventDetailedMap from "./EventDetailedMap";

const EventDetailedInfo = ({ event }) => {
  const [isMapOpen, setIsMapOpen] = useState(false);
  return (
    <SegmentGroup>
      <Segment attached="top">
        <Grid>
          <GridColumn width={1}>
            <Icon size="large" color="teal" name="info" />
          </GridColumn>
          <GridColumn width={15}>
            <p>{event.description}</p>
          </GridColumn>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <GridColumn width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </GridColumn>
          <GridColumn width={15}>
            <span>{event.date}</span>
          </GridColumn>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <GridColumn width={1}>
            <Icon name="marker" size="large" color="teal" />
          </GridColumn>
          <GridColumn width={11}>
            <span>{event.venue}</span>
          </GridColumn>
          <GridColumn width={4}>
            <Button
              onClick={() => setIsMapOpen(!isMapOpen)}
              color="teal"
              size="tiny"
              content={isMapOpen ? "Hide Map" : "Show Map"}
            />
          </GridColumn>
        </Grid>
      </Segment>
      {isMapOpen && (
        <EventDetailedMap
          lat={event.venueLatLng.lat}
          lng={event.venueLatLng.lng}
        />
      )}
    </SegmentGroup>
  );
};

export default EventDetailedInfo;
