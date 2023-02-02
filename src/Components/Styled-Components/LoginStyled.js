import styled from "styled-components";

export const LoginStyled = styled.div`
  height: 100vh;
  display: flex;

  .LoginCart {
    /* height: 390px; */
    width: 430px;
    border-radius: 15px;
    background-color: #d9d9d9;
    margin: auto;
  }
 form{
  padding: 20px;
  align-items: center;

  .buttons{
    flex-direction: column;
    padding: 10px;
    button{
      margin: auto;   
    }
    span{
      margin: auto;
      padding: 10px;
      cursor: pointer;

    }
  }

 
 }
`;