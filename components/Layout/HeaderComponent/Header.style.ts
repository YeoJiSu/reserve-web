import styled from "styled-components";

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLoggedIn: boolean }>`
  //background-color: ${(props) => props.theme.blue};

  min-width: 1322px;
  position: fixed;
  background-color: white;
  top: -10px;
  left: 0;
  right: 0;
  height: 90px;
  padding: 0px 70px 10px 70px;

  //min-width: 750px;
  .logo {
    float: left;
  }
  .description {
    display: none;
  }
  .reserve {
    display: none;
  }

  .header-login {
    float: right;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    height: 100%;
    margin-top: 22px;
    p {
      text-align: center;
    }
    span {
      border-radius: 40px;
      padding: 5px 20px 5px 20px;
      margin-right: 10px;

      width: 170px;
      font-size: 15px;
      font-weight: 500;
      background-color: ${({ isLoggedIn }) =>
        isLoggedIn ? "#8236009c" : "black"};
      color: white;
    }
  }

  .pages {
    float: right;

    ul li {
      display: inline-block;
      margin-right: 60px;
      padding-top: 15px;
      position: relative;
    }
    ul li a {
      color: black;
      font-size: 16px;
      display: inline-block;
      font-weight: 500;
      position: relative;
      line-height: 42px;
    }
    ul li a:hover:after {
      opacity: 1;
    }

    ul li a:after {
      position: absolute;
      left: 0;
      bottom: 7px;
      width: 100%;
      height: 2px;
      background: black;
      content: "";
      opacity: 0;
      -webkit-transform: all 0.3s;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
    }
  }
  .header-bottom {
    display: none;
  }
  @media screen and (max-width: 450px) {
    height: 200px;

    .logo img {
      width: 450px;
    }
    .header-login {
      display: none;
      // display: none;
    }
    .pages {
      display: none;
    }
    .description {
      display: inline;
      float: right;
      margin-top: 60px;
      margin-right: 100px;
    }
    .reserve {
      float: right;
      padding-right: 60px;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex-wrap: nowrap;
      height: 100%;
      margin-top: 15px;
      p {
        text-align: center;
      }
      span {
        border-radius: 40px;
        padding: 10px 30px 10px 30px;
        margin-right: 10px;

        width: 170px;
        font-size: 50px;
        font-weight: 200;
        background-color: ${({ isLoggedIn }) =>
          isLoggedIn ? "#8236009c" : "black"};
        color: white;
      }
    }
  }
`;
