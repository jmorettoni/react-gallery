import styled from "styled-components";

export const Container = styled.section`
    width: 300px;

    div > h1 {
        margin: 20px;
    }

    h1,
    p {
        padding: 0 15px;
    } 

    h1 {
        font-size: 20px;
        font-weight: bold;

        padding: 0;
        margin: 0;
    }

    @media (min-width: 400px) and (max-width: 599px) {
    width: 300px;
    }

    @media (min-width: 600px) and (max-width: 799px) {
      width: 350px;
    }

    @media (min-width: 800px) and (max-width: 999px) {
        width: 400px;
    }

    @media (min-width: 1000px) and (max-width: 1199px) {
        width: 300px;
    }

    @media (min-width: 1200px) and (max-width: 1399px)  {
        width: 350px;
    }

    @media (min-width: 1400px) {
        width: 400px;
    }
`;

export const Description = styled.p`
    height: 70px;
    margin: 0px 0;
    
    margin-bottom: 20px;

    @media (min-width: 800px) and (max-width: 999px) {
        margin-bottom: 10px;
    }

    @media (min-width: 1200px) { 
        margin: 5px 0;
    } 
`;

export const CreatorName = styled.p`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    font-weight: bold;

    margin: 15px 0 0 0;
    padding: 0; 

`;

export const LiveItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto 30px auto;

    width: 55px;
    height: 40px;
    border-radius: 25px; 
    border: 2px solid #58FFDE;

    font-size: 14px; 
`;