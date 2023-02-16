import styled from "styled-components";

export const SegmentManagementStyle = styled.div`
  background-color: #141e30;
  height: auto;
  .segmanage {
    .title {
      margin-bottom: 3rem;
      .titledata {
        color: white;
        text-shadow: 0.7rem 0.7rem 0.7rem black;
        padding-top: 0.8rem;
        font-size: 210%;
      }
    }

    .form-section {
      display: flex;
      form {
        margin: auto;
        padding: 20px;
        background-color: darkslategrey;
        width: 80vw;
        border-radius: 15px;
        .inputText {
          h5 {
            color: #fff;
          }
          .textinputdata{
            display: flex;
            position: inherit;
            
          }
          .AddButton{
          margin-left: 76%;
            margin-bottom:1rem;
            
          }

        }
        .checkboxData {
          h5 {
            color: #d2ffe0;
            padding: 10px;
            margin: 15px 0;
            border-radius: 10px;
            text-align: center;
            /* border-bottom: solid #fff 1px;
            border-top: solid #fff 1px; */
            background-color: #2a4848;
          }
          .mycheckboxvalues {
            .checkboxDiv {
              display: flex;
              align-items: center;
              width: 233px;
              input {
                margin: 10px;
                padding: 10px;
              }
              span {
                color: #fff;
                padding: 5px;
                margin: 0;
              }
            }
          }
        }
        .submit-button {
          display: flex;
          padding: 20px;
          button {
            margin: auto;
          }
        }
      }
    }

    .table-section {
      display: flex;
      table {
        width: 90vw;
        margin: 20px auto;
        text-align: center;
        background-color: #1269bb;
        border-radius: 10px;
        .buttondata{
          margin-top:2rem;

          .Mybutton{
            margin-right:0.3rem;
          }
        }
        .checkboxData {
          background-color: coral;
          h5 {
            color: #d2ffe0;
            padding: 10px;
            margin: 15px 0;
            border-radius: 10px;
            text-align: center;
            /* border-bottom: solid #fff 1px;
            border-top: solid #fff 1px; */
            background-color: #2a4848;
          }
          .mycheckboxvalues {
            .checkboxDiv {
              display: flex;
              align-items: center;
              width: 233px;
              input {
                margin: 10px;
                padding: 10px;
              }
              span {
                color: #fff;
                padding: 5px;
                margin: 0;
              }
            }
          }
        }
        .submit-button {
          display: flex;
          padding: 20px;
          button {
            margin: auto;
          }
        }
      }
      
      }
      
    }

    /* .formdata{
    margin-left: 1rem;
    margin-top: 1.2rem;
    .inputText{
        margin-top: 1.2rem;
        margin-bottom: 2.4rem;

        .description{
            padding-bottom: 1rem;
            color: bisque;
            text-align: justify;
            font-size: 160%;
        }
        .inputWrite{
            width: 60%;
            border-radius: 2.5rem;
            height: 2.5rem;
          

        }
        .autocomplete{
            width:60%;
            background-color:white;
            overflow-x: hidden;
            overflow-y: auto;
            border-radius: 1.5rem;
            border: 2px solid black;

            .mainvalues{
              padding: 0.5rem 0.5rem;

            }
            .mainvalues:hover{
                background-color: #1269BB;
                color:white;
            }
        }
    }
    .checkboxData{
        margin-bottom: 3rem;
        .description{
            padding-bottom: 1rem;
            color: bisque;
            text-align: justify;
            font-size: 160%;
        }
        .mycheckboxvalues{
            width: 100%;
            margin-top:0.7rem;

            .checkboxDiv{
                margin-bottom:0.3rem;
                color: bisque;
              
                .mycheckbox{
                    height: 1.4rem;
                    width: 1.4rem;
                }
                .mycheckboxvalues{
                    padding-left: 1rem;
                }
            }

        }

    }
    .Mybutton{
        margin-left:1rem;
        height:3rem;
        width: 10rem;
        border-radius: 2.5rem;
        font-size: 150%;
    }
} */

    /* .tabledata {
      margin-top: 2rem;
      background-color: #1269bb;
      color: white;
      .myhead {
        background-color: #0e5495;
      }
      .showdata {
        display: flex;
      }
    } */
    .modaluser{
      .userdata
      {
        margin-bottom: 12px;
      .formname{
        border: 2.5px solid black;
        height: 30px;
      }
    }
    .Mybutton{
      margin-left:40%;
    }
    }
    .modaluser1{
      background-color:lightblue;
      .checkboxData {
          h5 {
            padding: 10px;
            margin: 15px 0;
            border-radius: 10px;
            text-align: center;
            /* border-bottom: solid #fff 1px;
            border-top: solid #fff 1px; */
          }
          .mycheckboxvalues {
            .checkboxDiv {
              display: flex;
              align-items: center;
              width: 233px;
              input {
                margin: 10px;
                padding: 10px;
              }
              span {
                color: black;
                padding: 5px;
                margin: 0;
              }
            }
          }
        }

    }
    
`;
