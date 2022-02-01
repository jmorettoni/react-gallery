import styled from "styled-components";

export const Container = styled.footer`
  background: #7318c3;

  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 10px 0;

  img {
    width: 130px;

    padding: 25px 0 25px 0;
    /* T R B L */  
  }

  p {
    color: #ffffff;

    font-size: 10px;

    margin-bottom: 2px;
    padding-bottom: 5px;

    font-family: Helvetica;
  }

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
    
    p {
      font-size: 13px;
    }

    img {
      width: 130px;
    }
  }

  @media (min-width: 1200px) {
    padding: 25px 60px;

    p {
      font-size: 14px;
    }

    img {
      width: 130px;
    }
  }
`;