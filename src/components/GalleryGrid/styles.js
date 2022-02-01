import styled from 'styled-components';

export const GalleryImage = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;

  padding: 10px 90px;

  column-gap: 30px; 
  row-gap: 30px;

  img {
    width: 100%;

    border-radius: 20px;
  }

  @media (max-width: 799px) {
    row-gap: 25px; 
    column-gap: 0px;

    padding: 0 60px;
  }


  @media (min-width: 800px) and (max-width: 1199px) {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;  

    justify-content: center;
  }

  @media (min-width: 1200px) and (max-width: 1299px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;