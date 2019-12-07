import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../common/form/TextInput";

import { login } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const actions = {
  login
};

const LoginForm = ({ login, handleSubmit }) => {
  return (
    <Form
      error
      size="large"
      onSubmit={handleSubmit(login)}
      autoComplete={"off"}
    >
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
        <Button fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
