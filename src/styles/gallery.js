import styled from 'styled-components';

export const Container = styled.div`
  & > a {
    color: #fff;

    display: flex;
    justify-content: center;
  }

    @media (min-width: 1300px) {
      display: flex;
      flex-direction: column;

      margin: 0;
    }
`;