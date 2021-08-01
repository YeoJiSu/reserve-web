import styled from "styled-components";

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLoggedIn: boolean }>`
  //background-color: ${(props) => props.theme.blue};
  //background-color: #ffffff;
  //opacity: 0.5;
  //background-color: #ff9800;
  position: fixed;
  width: 100%;
  background-color: rgb(255 255 255 / 80%);
  min-width: 650px;
  .header-top {
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-evenly;
    //justify-content: left;
    flex-wrap: nowrap;
    p {
      color: white;
      font-size: 20px;
      font-weight: 700;
      width: 100%;
      text-align: center;
      // padding: 10px 30px 10px 0px;
      color: ${({ isLoggedIn }) =>
        isLoggedIn ? "#733000d9" : "rgb(47 48 51 / 89%)"};
      a {
        padding-left: 5px;
        font-family: cursive;
      }
    }
    .header-login {
      //width: calc(100% + 200px);
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      //justify-content: space-evenly;
      //justify-content: left;
      flex-wrap: nowrap;
      height: 100%;
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
    ul {
      color: black;
      padding-left: 15%;
    }
    li {
      margin: 5px 100px;
      padding: 5px 5px;
      display: inline;
      margin-left: 20px;
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
