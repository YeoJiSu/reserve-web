import styled from "styled-components";

export const LoginContainer = styled.div`
  position: relative;
  margin: 100px auto 0 auto;
  padding: 50px 26px;
  width: 100%;
  max-width: 720px;
  min-width: 200px;

  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
`;
export const LoginWrapper = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    color: #5c7cfa;
  }
`;
export const LoginHeader = styled.div`
  width: 100%;
  padding: 30px 0px;
  text-align: center;
  h1 {
    color: ${(props) => props.theme.purple_bold};
  }
  p {
    color: ${(props) => props.theme.purple};
  }
`;
// 로그인 form
export const LoginFormBox = styled.form`
  display: inline-block;
  text-align: center;

  width: 60%;
  min-width: 400px;

  input,
  button,
  h1,
  h2,
  h3,
  h4 p {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
  }
  & label {
  }

  & input {
    width: 100%;
    height: 42px;
    padding-left: 12px;
    box-sizing: border-box;
    margin-bottom: 20px;
    border-bottom: 2px solid #ced4da;
    &:focus {
      border-bottom: 2px solid #5c7cfa;
    }
  }

  & button {
    display: block;
    width: 100%;
    font-size: 16px;
    line-height: 42px;
    border-radius: 6px;
    cursor: pointer;
    background: #91a7ff;
    color: #fff;
    &:hover {
      background: #5c7cfa;
    }
  }
`;

export const ErrorText = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: #e03131;
`;

// SNS 회원가입 버튼
export const SnsSignupBox = styled.div`
  margin: 30px 0 10px 0;
  padding-bottom: 20px;
  border-bottom: 1px solid #ced4da;

  & h2 {
    font-size: 14px;
    font-weight: normal;
    margin-bottom: 20px;
  }

  & div > a {
    font-size: 40px;
    color: #ced4da;
    cursor: pointer;
    margin: 0 10px;
  }

  & .kakao-btn:hover {
    color: #fcc419;
  }
  & .google-btn:hover {
    color: #e03131;
  }
`;

// 홈페이지 회원가입
export const LocalSignupBox = styled.div`
  margin-top: 10px;

  & p {
    font-size: 13px;
    color: #adb5bd;
  }

  & a {
    color: #adb5bd;
    &:hover {
      font-weight: bold;
      color: #5c7cfa;
    }
  }
`;
