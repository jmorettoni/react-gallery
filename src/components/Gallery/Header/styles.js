import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin: 40px 0 25px 0;

    justify-content: center;

  } 

  hr {
    width: 100%;

    border: 0;
    border-top: 1.5px solid rgb(75, 74, 74);
  }
`;

export const IconsHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
