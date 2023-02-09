import styled from "styled-components";

export const NewDefectsStyled = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
  /* background: #f1f1f1; */
  background-color: #141e30;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }

  .modeldescription {
    display: flex;
    padding: 30px 30px 10px 30px;
    flex-wrap: wrap;
  }
  .inputElement {
    margin: auto;

    select,
    input {
      background-color: #83a4d4;
      color: black;
      padding: 5px;
      text-align: center;
      border-radius: 10px;
      border: none;
      width: 200px;
      text-transform: uppercase;
    }
    h5 {
      text-align: center;
      color: bisque;
    }
  }

  .defect-list-container {
    /* background-color: gray; */
    height: 100vh;
    /* overflow: hidden; */

    .defects {
      margin: 5px 20px 20px 20px;
      background-color: #83a4d4;
      border-radius: 10px 10px 10px 10px;
      padding: 20px;

      .defectlist {
        background-color: #373b44;
        height: 65vh;
        overflow: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
        .listdata {
          color: white;
          background-color:  #4286f4;
          margin: 5px;
          align-items: center;

          .vinNumber {
            padding: 0 10px 0 0;
            border-right: solid white 1px;
          }
          .model {
            padding: 0 10px 0 0;
            border-right: solid black 1px;
          }
        }
      }
    }
  }
`;
