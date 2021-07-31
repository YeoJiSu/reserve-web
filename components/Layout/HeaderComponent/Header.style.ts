import styled from "styled-components";

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLogin: boolean }>`
  height: 80px;
  background-color: ${(props) => props.theme.blue};
  position: relative;
  z-index: 5;

  /* 해더의 상단 */
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo {
      display: block;
      text-align: center;
    }
    .header-login {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      p {
        color: white;
        font-size: 15px;
        font-weight: 900;
        width: 100%;
        text-align: center;
        margin: 0px;
        padding: 10px 30px 10px 0px;
        color: ${({ isLogin }) => (isLogin ? "#ff5d5d" : "#7958ff")};
      }

      div {
        span {
          border: 1px solid;
          border-radius: 10px;
          padding: 10px;
          margin-right: 10px;
          width: 170px;
          font-weight: 900;
          background-color: ${({ isLogin }) =>
            isLogin ? "#ff5d5d" : "#c4ceffad"};
          color: #7958ff;
        }
      }
    }
  }

  /* 해더의 하단 */
  .header-bottom {
    // display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;

    height: 100%;
    background-color: #c0caf8;

    h1 {
      width: 200px;
      text-align: center;
      margin: 0px;
    }

    ul {
      text-align: right;
      background-color: ${(props) => props.theme.purple};
      color: white;
      padding: 3px;
      //width: calc(100% - 200px);
    }
    li {
      padding: 0px 50px;
      display: inline-block;
    }
    li:hover {
      background-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.red};
      padding: 0px 50px;
      display: inline-block;
    }
  }
`;
