import styled from 'styled-components';

export const Container = styled.div` 
  border: 2px solid rgb(75, 74, 74);
  border-radius: 20px;

  margin: 20px 90px; 

  display: flex;
  flex-direction: column;
  & > img {
    border-radius: 20px;
  }

  p {
    color: #fff;

    padding: 0 20px;
    margin: 0 0 20px 0;
    
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

  /* @media (max-width: 499px) */

  @media (max-width: 799px) {
    margin: 20px 60px;

    h1 {
      font-size: 40px;
    }

    & > img {
      margin: 30px 30px 0 30px;
      width: 100%;
    }
  }

  @media (min-width: 800px) and (max-width: 1199px) {
    p {
      padding: 15px 30px 30px 30px; 
      margin: 0px;
    }

    & > img {
      margin: 30px 170px;
    }
  }

  @media (min-width: 1200px) {  
    display: flex;
    flex-direction: row; 
    padding: 20px;

    gap: 20px;

    & > img {
      margin-top: 0;

      align-items: center;
    }

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

export const ProfileSocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 15px 0 0 0;

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
