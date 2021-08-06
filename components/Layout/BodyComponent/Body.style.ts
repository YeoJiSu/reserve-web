import styled from "styled-components";
export const Container = styled.div`
  height: 850px;
  min-width: 1200px;
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
`;

export const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translate(-50%);
  display: flex;
`;

export const Arrow = styled.div<{ isLeft: boolean }>`
  width: 50px;
  height: 50px;
  //background-color: gray;
  border-width: 10px;
  border-color: red;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${(props) => (props.isLeft ? "left: 5px" : "right: 5px")};
  transform: translate(-5px, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

export const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 5px 30px;
  cursor: pointer;
`;
export const BodySS = styled.div`
  .aboutUs1 {
    background-color: black;
    display: flex;
    padding: 10px;
    width: 100%;
    height: 300px;
    // justify-content: center;
    ///align-items: center;

    .box {
      color: white;
      padding: 100px;
      width: 500px;
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
`;
