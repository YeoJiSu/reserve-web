import React from "react";
import InputPresenter from "./Input.Presenter";

const InputContainer = ({ icon, placeholder }): JSX.Element => {
  return (
    <>
      <InputPresenter icon={icon} placeholder={placeholder} />
    </>
  );
};

export default InputContainer;
