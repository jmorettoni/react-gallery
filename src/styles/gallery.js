import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 30px;
  width: 100%;

  @media (min-width: 400px) and (max-width: 799px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 800px) and (max-width: 999px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1000px) and (max-width: 1199px) {
    gap: 20px;
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    margin: 0;
    gap: 20px;
  }

  @media (min-width: 1400px) {
    gap: 30px;

    margin: 0;
  }
`;