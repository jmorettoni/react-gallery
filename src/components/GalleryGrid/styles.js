import styled from 'styled-components';

export const GalleryImage = styled.div`
  width: 100%;

  padding: 10px 60px;

  display: grid;
  justify-content: center;

  column-gap: 30px; 
  row-gap: 30px;

  img {
    width: 100%;

    border-radius: 20px;
  }

  @media (min-width: 700px) and (max-width: 799px) {
    row-gap: 25px; 
    column-gap: 0px;

    padding: 0 60px;
  }

  @media (min-width: 800px) and (max-width: 999px) {
    grid-template-columns: 1fr 1fr;  

    justify-content: center;
  }

  @media (min-width: 1000px) and (max-width: 1199px) {
    grid-template-columns: 1fr 1fr; 

    padding: 10px 150px;
  }

  @media (min-width: 1200px)  {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;