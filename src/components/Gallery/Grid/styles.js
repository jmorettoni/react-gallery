import styled from "styled-components";

export const Container = styled.section`
  h1 {
    text-align: center;

    margin: 30px 0 30px 0;
    
    font-size: 30px;

    @media (min-width: 1200px) {
      margin: 40px 0 40px 0;
    }
  }
`;

export const GalleryImage = styled.div`
  width: 100%;

  display: grid;
  justify-content: center;

  row-gap: 25px;

  ul{
    padding-left: 0;

    list-style-type: none; 

    margin: 0;
  }

  img {
    width: 250px;

    border-radius: 20px;
  }


  @media (min-width: 800px) {
    width: 100%;

    display: grid;
    grid-template-columns: 250px 250px;  

    justify-content: center;

    column-gap: 30px; 
    row-gap: 30px;

    img {
      margin-bottom: 0px; 
        
    }
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 230px 230px 230px 230px;

    column-gap: 60px;

    img {
        width: 270px;
      }
  }

  @media (min-width: 1300px) {
    display: grid;
    grid-template-columns: 310px 310px 310px 310px;

    column-gap: 30px;
    row-gap: 30px;

    img {
        width: 310px;
      }
  }
`;