import styled from 'styled-components';

//styled-component 적용하기
export const HeaderSS = styled.div`
  height: 120px;
  background-color: ${(props) => props.theme.red};
`;
