import styled from 'styled-components';

export const Container = styled.div` 
  border: 2px solid rgb(75, 74, 74);
  border-radius: 20px;

  margin: 20px 60px;
  padding: 20px;

  display: flex;
  flex-direction: column;

  p {
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

  @media (max-width: 449px) {
    h1 {
      font-size: 30px;
    }
  }
 

  @media (min-width: 450px) and (max-width: 799px) {
    margin: 20px auto;

    width: 310px;

    h1 {
      font-size: 30px;
    }
  } 

  @media (min-width: 800px) and (max-width: 999px){
    margin: 20px 60px; 

    p {
      padding: 15px 30px 30px 30px; 
      margin: 0px;
    }
  } 

  @media (min-width: 1000px) and (max-width: 1199px) {
    margin: 10px 150px;
  }
`;

export const CreatorImg = styled.div`
  margin: auto;

  img {
    border-radius: 20px;

    width: 250px;

    @media (min-width: 800px) and (max-width: 999px) {
      margin: 30px 170px;
    }

    @media (min-width: 1000px) and (max-width: 1199px) {
      margin: 30px 190px;
    }

    @media (min-width: 1200px){
      margin-top: 0;

      align-items: center;

      width: 300px;
    }
  }
`;

export const ProfileSocialNetworks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 15px 0 0 0;

  @media (min-width: 800px) and (max-width: 1199PX) {
    flex-direction: row;
    justify-content: center;
  }

  @media (min-width: 1200px) {
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
  @media (min-width: 800px) and (max-width: 1199px){
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

  
  @media (min-width: 1200px) {  
    flex-direction: row; 
    padding: 30px;

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
