import React from "react";
import InputPresenter from "./Input.Presenter";
interface InputPorps {
  // 타입수정이 필요함
  icon: any;
  placeholder: any;
}
const InputContainer = ({ icon, placeholder }: InputPorps): JSX.Element => {
  return (
    <>
      <InputPresenter icon={icon} placeholder={placeholder} />
    </>
  );
};

export default InputContainer;
