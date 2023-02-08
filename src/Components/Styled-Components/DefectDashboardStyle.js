import styled from "styled-components";

export const DefectDashboardStyle = styled.div`
  background-color: #141e30;
  display: flex;
  overflow: hidden;
  height: 100vh;

  .defects-repaired {
    width: 30%;
    max-height: 100vh;
    border-right: solid gold 1px;
    display: flex;
    flex-direction: column;

    /*-------------------- Defects List --------------------*/

    .defects-list {
      padding: 10px;
      height: 50%;
      /* overflow: scroll; */
        border-bottom: solid gold 1px;
        ::-webkit-scrollbar {
          display: none;
        }

      .defect-outer {
        height: 30vh;
        overflow: scroll;
        ::-webkit-scrollbar {
          display: none;
        }
      }

      select {
        margin: 10px 0;
      }

      .defects-heading {
        color: bisque;
        height: 45px;
        h3 {
          text-align: center;
          text-transform: uppercase;
        }
      }

      .defect {
        display: flex;
        margin: 3px;
        align-items: center;

        .defect-name {
          width: 604px;
          background-color: #ff9b9b;
          border-radius: 5px;
          padding-left: 10px;
          h5 {
            font-size: 13px;
            span{
              font-style: italic;
              text-decoration: underline;
              padding: 10px;
            }
          }
        }

        .done {
          margin: 5px;
        }
      }
    }

    /*-------------------- Repaired List --------------------*/

    .repaired-list {
      padding: 10px;
      overflow: scroll;
      height: 50%;
      ::-webkit-scrollbar {
        display: none;
      }

      .repaired-heading {
        color: bisque;
        height: 45px;
        h3 {
          text-align: center;
          text-transform: uppercase;
        }
      }

      .repaired {
        display: flex;
        margin: 10px;
        align-items: center;

        .repaired-name {
          width: 683px;
          background-color: #9cf27e;
          border-radius: 5px;
          padding-left: 10px;
          h5 {
            font-size: 13px;
            span{
              font-style: italic;
              text-decoration: underline;
              padding: 10px;
            }
          }
        }
      }
    }
  }

  /* -------------------- Add Defect section -------------------- */

  .add-defects {
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-height: 100vh;

    .vehicle-information {
      max-height: 30%;
      display: flex;
      flex-direction: column;

      .logo img{
        width: 150px;
        height: 50px;
        margin: 10px;
      }

      .info {
        height: 200px;
        width: 700px;
        margin: 20px auto;
        border-radius: 10px;
        background: linear-gradient(to right, #e0eafc, #cfdef3);
        h4{
          margin: 20px;
        }
      }
    }

    /* Segments */

    .defect-segments {
      margin-top: 50px;
      .add-defect-heading {
        height: 45px;
        h3 {
          text-align: center;
          color: bisque;
          text-transform: uppercase;
        }
      }
    }

    .segments {
      margin: 20px;

      .inner-segment {
        justify-content: center;

        .a-segment {
          display: flex;
          width: 185px;
          height: 60px;
          margin: 20px;
          color: black;
          text-transform: uppercase;
          background-color: #58c8eb;
          border-radius: 10px;
          cursor: pointer;

          h5 {
            margin: auto;
            text-align: center;
          }
        }
        
      }
    }
  }
`;
