import React from 'react';
import {Button, MenuItem} from "semantic-ui-react";

const SignedOutMenu = ({signIn}) => {
    return (
        <MenuItem position="right">
            <Button basic inverted content="Login" onClick={signIn}/>
            <Button
                basic
                inverted
                content="Register"
                style={{ marginLeft: "0.5em" }}
            />
        </MenuItem>
    );
};

export default SignedOutMenu;