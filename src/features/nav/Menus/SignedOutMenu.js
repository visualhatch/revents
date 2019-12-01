import React from 'react';
import {Button, MenuItem} from "semantic-ui-react";

const SignedOutMenu = ({signIn, register}) => {
    return (
        <MenuItem position="right">
            <Button basic inverted content="Login" onClick={signIn}/>
            <Button
                onClick={register}
                basic
                inverted
                content="Register"
                style={{ marginLeft: "0.5em" }}
            />
        </MenuItem>
    );
};

export default SignedOutMenu;