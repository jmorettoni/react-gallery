import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Russo One', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;

    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Content = styled.div`
  background: #4073E0;

  margin: 30px 0 0 0;

  div {
    display: flex;
    flex-direction: column;
  }

  font-family: Helvetica;
  text-align: center;  

  p {
    color: #FFF;
  }

  img {
    width: 400px;   
  } 

  @media (min-width: 400px) and (max-width: 599px) {
    img {
      width: 300px;
    }
  }

  @media (min-width: 600px) and (max-width: 799px) {
    img {
      width: 350px;
    }
  }

  @media (min-width: 800px) and (max-width: 999px){
    img {
      width: 400px;
    }
  }

  @media (min-width: 1000px) and (max-width: 1199px) {
    gap: 15px;

    img {
      width: 300px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1399px) {
    gap: 30px;
    
    img {
      width: 350px;
    }
  }
  
  @media (min-width: 1400px) {
    justify-content: center;
    
    img {
      width: 400px;
    }
  } 
`;