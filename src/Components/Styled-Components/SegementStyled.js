import styled from "styled-components";

export const SegementStyled = styled.div`
  height: 100vh;
  display: flex;
  /* background: -webkit-linear-gradient(to right, #4286f4, #373b44); */
  /* background: linear-gradient(to right, #4286f4, #373b44); */

  /* -------------------- Select Defect -------------------- */
  .select-defect {
    display: flex;
    flex-direction: column;
    /* background: #373B44;   */
    /* fallback for old browsers */
    /* background-color: #141e30; */
    width: 70vw;
    /* height: 100vh; */
    border-right: solid gold 1px;

    .section-one {
      display: flex;
      justify-content: space-between;
      margin: 10px;

      .back-button {
        margin: 5px;
        border-radius: 5px;

        span {
          border-radius: 200px;
          background: linear-gradient(to right, #ffb347, #ffcc33);
          padding: 10px 20px;
        }
      }

      .Add-button {
        color: #000;
        span{
          border-radius: 20px;
        }
        .modal {
          .modal-dialog {
            display: flex;
            height: 75vh;
            .modal-content {
              background-color : #74ebd5 ;
              border-radius: 30px;
              
              margin: auto;
              .modal-body {
                form {
                  .submit-btn {
                    button{
                        border-radius: 30px;
                        padding: 5px 20px;
                    }
                    
                  }
                }
              }
            }
          }
        }
      }

      .back-button:hover {
        transform: scale(1.1);
      }
      .segement-name {
        width: 300px;
        margin-left: 50px;
        display: flex;

        h3 {
          margin: auto;
          padding: 10px 20px;
          border-radius: 40px;
          background: linear-gradient(to right, #74ebd5, #acb6e5);
        }
      }
    }
    .section-two {
      display: flex;
      margin: 10px;
      .search {
        margin: auto;
        width: 50%;
      }
    }

    .heading {
        margin: 10px;
        text-transform: uppercase;
        color: #000;
        font-weight: 700;
       
      }
    .section-three {
      display: flex;
      flex-direction: column;
      margin: 20px;
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      
      .defect-list {
        display: flex;
        flex-direction: column;
        /* background-color: #fff; */
        /* overflow: scroll;
                height: 600px; */
        div {
          display: flex;
          height: 30px;
          margin: 10px 10px 10px 0;
          align-items: center;
          /* background-color: #e8e8e8; */
          box-shadow: 4px 4px 11px 0px;
          cursor: pointer;
          h5 {
            font-size: 12px;
          }
        }
      }
    }
  }

  /* -------------------- Selected defects -------------------- */

  .selected {
    width: 30vw;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    .heading {
      display: flex;
      height: 50px;
      border-bottom: solid gold 1px;
      color: #000;
      h5 {
        margin: auto;
        text-align: center;
        text-transform: uppercase;
      }
    }
    .container {
      .a-defect {
        display: flex;
        /* justify-content: space-between; */
        margin: 10px 10px 10px 0;
        h6 {
          background-color: #ffc5c5;
          width: 80%;
          border-radius: 5px;
          padding: 5px 0;
          text-align: center;
          font-size: 12px;
        }
        span {
          height: 29px;
          margin-left: 10px;
          /* align-items: center; */
        }
      }
    }
  }
`;
