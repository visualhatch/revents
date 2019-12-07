import React, { Component } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import EventList from "../EventList/EventList";

import { connect } from "react-redux";
import {
  createEvent,
  deleteEvent,
  updateEvent
} from "../../../store/actions/eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapStateToProps = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const actions = {
  createEvent,
  deleteEvent,
  updateEvent
};

class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent />;
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </GridColumn>
        <GridColumn width={6}>
          <EventActivity />
        </GridColumn>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
