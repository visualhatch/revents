import React from "react";
import { FormField, Label, Select } from "semantic-ui-react";

const SelectInput = ({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) => {
  return (
    <FormField error={touched && !!error}>
      <Select
        value={input.value || null}
        onChange={(e, data) => input.onChange(data.value)}
        placeholder={placeholder}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color={"red"}>
          {error}
        </Label>
      )}
    </FormField>
  );
};

export default SelectInput;
