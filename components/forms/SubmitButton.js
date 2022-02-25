import React from "react";
import { TouchableOpacity } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";
function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity onPress={handleSubmit}>
      <AppButton title={title} />
    </TouchableOpacity>
  );
}

export default SubmitButton;
