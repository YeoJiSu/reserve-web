import styled from "styled-components";
import { theme } from "@/styles/theme";

export const FooterSS = styled.div`
  color: white;
  min-width: 600px;
  @media screen and (max-width: ${(props) => props.theme.mobile_width}) {
    .footer-top {
      .image {
        .phoneImage1 {
          width: "150px";
        }
      }
      .num {
      }
    }
    .footer-bottom {
    }
  }

  background-color: gray;
  .footer-top {
    padding-top: 10px;
    font-size: 20px;

    .image {
      text-align: center;
      //padding-right: 300px;
 width: "30px";
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
    padding-bottom: 10px;
    text-align: center;
  }
`;
