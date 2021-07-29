import styled from 'styled-components';

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLogin }>`
  height: 80px;
  background-color: ${(props) => props.theme.blue};

  .header-top {
    //background-color: ;
    text-align: right;

    .header-login {
      display: flex;
      flex-direction: row;
      align-items: center;

      justify-content: space-between;
      flex-wrap: nowrap;
      height: 100%;
      //background-color: ${(props) => props.theme.blue};
      p {
        color: white;
        font-size: 15px;
        font-weight: 900;
        width: 100%;
        text-align: center;
        margin: 0px;
        padding: 10px 30px 10px 0px;
        color: ${({ isLogin }) => (isLogin ? '#ff5d5d' : '#7958ff')};
      }

      span {
        border: 1px solid;
        border-radius: 10px;
        padding: 10px;
        margin-right: 10px;
        width: 170px;
        font-weight: 900;
        background-color: ${({ isLogin }) =>
          isLogin ? '#ff5d5d' : '#c4ceffad'};
        color: #7958ff;
      }
    }
  }

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
