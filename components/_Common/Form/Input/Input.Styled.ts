import styled from "styled-components";

//styled-component 적용하기
export const InputStyled = styled.div<{ iconExits: boolean }>`
  background-color: antiquewhite;
  input {
    position: relative;
    width: 100%;
    height: 46px;
    padding: ${({ iconExits }) => (iconExits ? "0 44px 0 11px" : "0 11px")};
    border: 1px solid ${(props) => props.theme.blue};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    ::placeholder {
      color: ${(props) => props.theme.purple_bold};
    }
    & :focus {
      border-color: ${(props) => props.theme.purple_bold};
    }
  }
  .input-icon-wrapper {
    position: absolute;
    top: 0;
    right: 11px;
    height: 46px;
    display: flex;
    align-items: center;
  }
`;
