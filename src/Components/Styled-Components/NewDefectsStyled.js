import styled from "styled-components";

export const NewDefectsStyled = styled.div`

/* height: 100vh; */
  /* width: 100vw; */
  display: flex;
  background: #f1f1f1;
  flex-direction: column;
  ::-webkit-scrollbar {
          display: none;
        }

  .modeldescription{
    display:flex;
    padding: 30px 30px 10px 30px;
    flex-wrap: wrap;
    
  }
  .inputElement{
    margin: auto;

    select, input{
      background-color: #D9D9D9;
      padding: 5px;
      border-radius: 10px;
      border: none;
      width: 200px;
    }
    h5{
      text-align: center;
    }
  }

  .defect-list-container{
    /* background-color: gray; */
    /* height: 100vh; */
    /* overflow: hidden; */
    
    .defects{
        margin: 5px 20px 20px 20px;
        background-color: lightgrey;
        border-radius: 10px 10px 10px 10px ;
        padding: 20px;

        .defectlist{
          /* height: 65vh; */
          overflow: scroll;
          ::-webkit-scrollbar {
          display: none;
        }
          .listdata{
          background-color: #fff;
          margin: 5px;
          align-items: center;
          
          .vinNumber{
              padding: 0 10px 0 0;
              border-right: solid black 1px;
          }
          .model{
              padding: 0 10px 0 0;
              border-right: solid black 1px;
          }
         
        }
        }

       
      }
  }

  .section-2{
   
    display: flex;
    flex-direction: column;
    /* background-color: black; */
    .management-section{
      display: flex;
      background-color: grey;
      margin: 30px;
      height: 400px;
      border-radius: 10px;
    }
  }
`;
