import styled from "styled-components";

export const FooterSS = styled.div`
  color: white;
  min-width: 600px;

  background-color: gray;
  .footer-top {
    font-size: 20px;

    .image {
      text-align: center;
      //padding-right: 300px;

      .phoneImage1 {
        margin-right: 20%;
      }
    }
    .num {
      margin-left: 50px;
      text-align: center;
      span :nth-child(1) {
        margin-right: 20%;
      }
    }
  }
  .footer-bottom {
    padding-top: 50px;
    text-align: center;
  }
`;
