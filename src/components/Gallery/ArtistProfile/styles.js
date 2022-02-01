import styled from 'styled-components';

export const Container = styled.section` 
  border: 2px solid rgb(75, 74, 74);
  border-radius: 20px;

  margin: 10px 30px;

  display: flex;
  flex-direction: column;

  padding: 30px 0;

  p {
    color: #fff;

    padding: 0 20px;
    margin: 0 0 10px 0;
    
    text-align: center;

    color: #ababab;
    
    font-family: Helvetica;
  }

  h1 {
    font-weight: bold;
    font-size: 40px;

    text-align: center;

    margin: 20px 0 0 0;
  }

  @media (min-width: 800px) {
      p {
      padding: 0px 30px; 
      margin: 0px;
    }

    margin: 30px 70px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row; 

    margin: 50px 90px 30px 90px;
    padding: 20px;

    gap: 20px;

    p {
      padding: 0px 20px 0 15px;

      text-align: left;

      line-height: 30px;
    }
  
    h1 {
      padding-left: 20px;
      margin: 0;

      text-align: left;

      font-size: 45px;
    }
    
  }
`;

export const ArtisteProfile = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 20px;

    width: 270px;
    height: 270px;

    background-color: red;
  }

  @media (min-width: 800px) {
    margin: 0px;
  } 

  @media (min-width: 1200px) {
    margin-top: 0;

    align-items: center;
  }

`;

export const ProfileSocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px 0;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;

    justify-content: start;

    padding-left: 20px;

    margin: 0px;
  }

`;

export const ProfileIcons = styled.div`

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ProfileLinkedinIcon = styled.div`
  @media (min-width: 800px) {
    width: 90px;
  }

  @media (min-width: 1200px) {
    width: 90px;

    margin: 0;
  }
`;

export const ProfileInformations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
