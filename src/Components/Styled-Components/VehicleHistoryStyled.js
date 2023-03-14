import styled from "styled-components";

export const VehicleHistoryStyled = styled.div`
  height: 100vh;
  width: -webkit-fill-available;
  display: flex;
  padding-left: 20px;
  /* background-color: #141e30; */
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
      /* background-color:#83a4d4; */
      background-color: #0000001c;
      color:black;
      padding: 5px;
      border-radius: 10px;
      border: none;
      width: 200px;
    }
    h5 {
      text-align: center;
      /* color: bisque; */
      color: #000;
    }
  }

  .defect-list-container {
    height: 100vh;

    .result-filter {
      display: flex;
      /* background-color: #83a4d4; */
      background-color: #0000001c;
      /* background-color: lightgrey; */
      margin: 20px 20px 0 20px;
      border-radius: 10px 10px 0 0;

      .form-check {
        margin: 10px;
        color: black;
      }
    }
    .defects {
      /* background-color: #83a4d4; */
      background-color: #0000001c;
      margin: 5px 20px 20px 20px;
      /* background-color: lightgrey; */
      border-radius: 0 0 10px 10px;

      padding: 20px;

      .defectlist {
        /* background-color: #373b44; */
        height: 65vh;
        overflow: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
        .listdata {
          color: #000;
          /* background-color:#4286f4; */
            background-color: #7c9adf94;
            border-radius: 5px;
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
