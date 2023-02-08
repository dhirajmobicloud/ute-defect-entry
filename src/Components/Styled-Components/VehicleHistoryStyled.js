import styled from "styled-components";

export const VehicleHistoryStyled = styled.div`
  height: 100vh;
  /* width: 100vw; */
  display: flex;
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
    text-transform: uppercase;

    select,
    input {
      text-transform: uppercase;
      text-align: center;
      background-color:#83a4d4;
      color:black;
      padding: 5px;
      border-radius: 10px;
      border: none;
      width: 200px;
    }
    h5 {
      text-align: center;
      color: bisque;
    }
  }

  .defect-list-container {
    height: 100vh;

    .result-filter {
      display: flex;
      background-color: #83a4d4;
      /* background-color: lightgrey; */
      margin: 20px 20px 0 20px;
      border-radius: 10px 10px 0 0;

      .form-check {
        margin: 10px;
        color: black;
      }
    }
    .defects {
      background-color: #83a4d4;
      margin: 5px 20px 20px 20px;
      /* background-color: lightgrey; */
      border-radius: 0 0 10px 10px;

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
          background-color:#4286f4;
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
