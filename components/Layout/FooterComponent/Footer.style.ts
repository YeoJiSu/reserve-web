import styled from 'styled-components';

export const FooterSS = styled.div`
  height: 100px;

  background-color: ${(props) => props.theme.blue};
  .footer-top {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: space-between;
    flex-wrap: nowrap;
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;

    div {
    }
  }
  .footer-bottom {
    text-align: center;
  }
`;
