import styled from "styled-components";
export const Container = styled.div`
  height: 700px;
  min-width: 1200px;
  width: 100%; //추가

  h1 {
    position: relative;
    font-size: 8rem;
    text-transform: uppercase;
    font-family: test;
    color: #fff;
    z-index: 10;
  }
`;

export const FillImage = styled.img`
  //  display: ${(isShow) => (isShow ? "inline" : "none")};
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 485px) {
    height: 1200px;
    width: 100%; //추가
  }
`;

export const PickerWrapper = styled.div`
  //position: center;
  //bottom: 10px;
  //transform: translate(-50%);
  margin-left: 50%;
  margin-top: -40px;
  display: flex;
  @media screen and (max-width: 485px) {
    display: none;
  }
`;

export const Arrow = styled.div<{ isLeft: boolean }>`
  ${(props) =>
    props.isLeft ? "left: 5px; float:left;" : "right: 5px; float:right;"};
  transform: translate(0px, -300px);
  //display: flex;

  @media screen and (max-width: 485px) {
    img {
      width: 120px;
    }
    transform: translate(0px, -500%);
  }
`;

export const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 5px 30px;
  cursor: pointer;
`;
export const MainStyled = styled.div`
  background-color: black;
  //width:1200px;
  min-width: 1200px;
  width: 100%; //추가
  //height:500px;
  .aboutUs1 {
    display: flex;
    padding: 10px;
    //width: 100%;
    height: 500px;
    // justify-content: center;
    ///align-items: center;

    .box {
      color: white;
      padding: 100px;
      //width: 500px;
      width: 25%;
      font-size: 20px;
      font-weight: 900;

      .content {
        color: black;
      }
      .content:hover {
        color: white;
      }
    }
  }
  @media screen and (max-width: 485px) {
    background-color: black;
    width: 1200px;
    height: 2500px;
    .aboutUs1 {
      margin-top: 500px;
      display: block;
      .box {
        color: white;
        padding: 100px;
        width: 25%;
        font-size: 20px;
        font-weight: 900;

        .content {
          color: silver;
        }
        .content:hover {
          color: white;
        }
      }
    }
  }
`;
