import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: normal 16px sans-serif;
  padding: 45px 50px;

  .footer-left p {
    color: #8f9296;
    font-size: 14px;
    margin: 0;
  }

  /* Footer links */

  p.footer-links {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
    margin: 0 0 10px;
    padding: 0;
    transition: ease 0.25s;
  }

  .footer-title {
    font-size: 24px;
  }

  p.footer-links a {
    display: inline-block;
    line-height: 2.1;
    text-decoration: none;
    color: inherit;
    transition: ease 0.25s;
    padding: 0px 25px 0px 0px;
  }
  .footer-right {
    float: right;
    margin-top: 6px;
    max-width: 180px;

    .images {
      width: 30px;
    }
  }

  .footer-right a {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 2px;
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-left: 3px;
    transition: all 0.25s;
  }

  .footer-right a:hover {
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }

  /* Media Queries */

  @media screen and (max-width: ${(props) => props.theme.mobile_width}) {
    .footer-left,
    .footer-right {
      text-align: center;
    }
    .footer-right {
      float: none;
      margin: 0 auto 20px;
    }
    .footer-left p.footer-links {
      line-height: 1.8;
    }
  }
`;
