import React from "react";
import { FormField, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <FormField error={touched && !!error}>
      <textarea {...input} rows={rows} placeholder={placeholder} type={type} />
      {touched && error && (
        <Label basic color={"red"}>
          {error}
        </Label>
      )}
    </FormField>
  );
};

export default TextArea;
