import styled from "styled-components";

export const SegmentManagementStyle=styled.div`
background-color: #141e30;
height: 170vh;

.title{
    margin-bottom: 3rem;
    .titledata{
        color: white;
        text-shadow: 0.7rem 0.7rem 0.7rem black;
        padding-top: 0.8rem;
        font-size: 210%;
    }
}

.formdata{
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
}











`