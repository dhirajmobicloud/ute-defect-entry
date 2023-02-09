import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #141e30;

  .logo img{
        width: 150px;
        height: 50px;
        margin: 10px;
      }

  .LoginCart {
    /* height: 390px; */
    width: 430px;
    border-radius: 15px;
    background-color: #2C5364;
    /* background-color: #d9d9d9; */
    margin: auto;
  }
  form {
    padding: 40px;
    align-items: center;

    .span-heding:hover{
     color: white;
     transition: 1s;
    }
    .buttons {
      flex-direction: column;
      padding: 10px;
      
      button {
        margin: auto;
        
      }
      span {
        margin: auto;
        padding: 10px;
        cursor: pointer;
        :hover{
        color:white;
        transition: 1s;
       
      } 
      }
     
    }
  }
  
`;
