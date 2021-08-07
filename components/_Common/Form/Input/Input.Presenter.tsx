import React from "react";
import { InputStyled } from "./Input.Styled";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

const InputPresenter = ({ icon, ...props }: IProps): JSX.Element => {
  return (
    <InputStyled iconExits={!!icon}>
      <input {...props} />
      <div className="input-iconwrapper">{icon}</div>
    </InputStyled>
  );
};

export default InputPresenter;
