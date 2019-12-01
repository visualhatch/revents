import React from 'react';
import {Icon, Segment} from "semantic-ui-react";
import GoogleMapReact from "google-map-react";

import * as googleConfig from '../../../env/env'

const API = googleConfig.default.apiKey

const Marker = ({ text }) => (
    <Icon name={"marker"} size={"big"} color={"red"} />
);

const EventDetailedMap = ({lat, lng}) => {
    const zoom = 14
    return (
        <Segment attached={'bottom'} style={{padding: 0}}>
            <div style={{ height: "300px", width: "100%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: API }}
                    defaultCenter={{lat, lng}}
                    defaultZoom={zoom}
                >
                    <Marker lat={lat} lng={lng} text="My Marker" />
                </GoogleMapReact>
            </div>
        </Segment>
    );
};

export default EventDetailedMap;