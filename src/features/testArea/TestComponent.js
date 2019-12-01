import React, { Component } from "react";
import { connect } from "react-redux";
import TestPlaceInput from "./TestPlaceInput";
import Map from "./TestMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

import { openModal } from "../../store/actions/modalActions";
import { Button } from "semantic-ui-react";

const actions = {
  openModal
};
class TestComponent extends Component {
  state = {
    latlng: {
      lat: 59.95,
      lng: 30.33
    }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latlng: latLng
        });
      })
      .catch(error => console.error("Error", error));
  };

  render() {
      const {openModal} = this.props
    return (
      <div>
        <h1>Test Component</h1>
        <Button
          onClick={() => openModal("TestModal", { data: 42 })}
          color={"teal"}
          content={"Open Modal"}
        />
        <TestPlaceInput selectAddress={this.handleSelect} />
        <Map key={this.state.latlng.lng} latlng={this.state.latlng} />
      </div>
    );
  }
}

export default connect(null, actions)(TestComponent);
