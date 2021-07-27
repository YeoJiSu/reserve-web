import styled from 'styled-components';

//styled-component 적용하기
export const HeaderSS = styled.div<{ isLogin }>`
  height: 200px;
  background-color: ${(props) => props.theme.red};

  .header-top {
    background-color: aquamarine;
    text-align: right;

    .header-login {
      span {
        border: 1px solid;
        border-radius: 10px;
        padding: 10px;
        background-color: ${({ isLogin }) => (isLogin ? 'blue' : 'red')};
        color: #ffffff;
      }
    }
  }

  .header-bottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    height: 100%;
    background-color: aquamarine;

    h1 {
      width: 200px;
      text-align: center;
      margin: 0px;
    }

    ul {
      background-color: bisque;
      width: calc(100% - 200px);
    }
    li {
      padding: 0px 30px;
      display: inline-block;
    }
  }
`;
