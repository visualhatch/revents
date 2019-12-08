import React from "react";
import { Button, Divider, Form, Label, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../common/form/TextInput";

import { login, socialLogin } from "../../../store/actions/authActions";
import { connect } from "react-redux";
import SocialLogin from "../SocialLogin/SocialLogin";

const actions = {
  login,
  socialLogin
};

const LoginForm = ({ login, handleSubmit, error, socialLogin }) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)} autoComplete={"off"}>
      <Segment>
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && (
          <Label basic color={"red"}>
            {error}
          </Label>
        )}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>Or</Divider>
        <SocialLogin socialLogin={socialLogin}/>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
