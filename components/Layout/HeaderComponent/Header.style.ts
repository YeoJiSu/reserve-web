import styled from "styled-components";

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLoggedIn: boolean }>`
  //background-color: ${(props) => props.theme.blue};

  position: fixed;
  width: 100%;
  background-color: rgb(255 255 255 / 70%);
  min-width: 750px;
  .header-top {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    p {
      padding-left: 30px;
      color: white;
      font-size: 20px;
      font-weight: 700;
      width: 100%;
      text-align: left;
      // padding: 10px 30px 10px 0px;
      color: ${({ isLoggedIn }) =>
        isLoggedIn ? "#733000d9" : "rgb(47 48 51 / 89%)"};
      a {
        padding-left: 10px;
        font-family: cursive;
      }
    }
    .header-login {
      width: 100%;
      padding-right: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
      p {
        text-align: right;
      }
      span {
        border: 1px solid;
        border-radius: 10px;
        padding: 10px;
        margin-right: 10px;
        width: 170px;
        font-size: 15px;
        font-weight: 500;
        background-color: ${({ isLoggedIn }) =>
          isLoggedIn ? "#8236009c" : "gray"};
        color: white;
      }
    }
  }
  .header-bottom {
    height: 55px;
    min-width: 1000px;
    text-align: left;

    ul {
    }
    li {
      margin-right: 8%;
      padding: 5px 5px;
      display: inline;
    }
    li:hover {
      background-color: ${({ isLoggedIn }) =>
        isLoggedIn ? "#8236009c" : "gray"};
      color: white;
      padding: 5px 5px;
      border-radius: 20%;
    }
  }
`;
