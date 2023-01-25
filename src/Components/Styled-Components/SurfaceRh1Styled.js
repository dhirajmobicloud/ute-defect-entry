import styled from "styled-components";

export const SurfaceRh1Styled = styled.div`
height: 100vh;
display: flex   ;

/* -------------------- Select Defect -------------------- */
    .select-defect{
        display: flex;
        flex-direction: column;
        background-color: #E8E8E8;
        width: 70vw;
        /* height: 100vh; */
        border-right: solid black 1px;

        .section-one{
            display: flex;
            justify-content: space-between;
            margin: 10px;

            .back-button{
                margin: 5px;
                span{
                    border-radius: 200px;
                }
            }

        }
        .section-two{
            display: flex;
            margin: 10px;
            .search{
                margin: auto;
                width: 50%;
            }
        }
        .section-three{
            display: flex;
            flex-direction: column;
            margin: 20px; 
            overflow: scroll;
            ::-webkit-scrollbar{
                display: none;
            }
            .heading{
                margin: 10px;
                text-transform: uppercase;
            }
            .defect-list{ 
                display: flex;
                flex-direction: column;
                background-color: #fff;
                /* overflow: scroll;
                height: 600px; */
                div{
                    display: flex;
                    height: 30px;
                    margin: 10px 10px 10px 0;
                    align-items: center;
                    background-color: #E8E8E8;
                    cursor: pointer;
                    h5{
                       font-size: 12px;
                    }
                }  
            }
        }
    }

    /* -------------------- Selected defects -------------------- */

    .selected{
        width: 30vw;
        display: flex;
        flex-direction: column;

        .heading{
            display: flex;
            height: 50px;
            border-bottom: solid black 1px;
            h5{
                margin: auto;
                text-align: center;
                text-transform: uppercase;
            }
        }
        .container{
                .a-defect{
                    display: flex;
                    /* justify-content: space-between; */
                    margin: 10px 10px 10px 0;
                    h6{
                        background-color: #FFC5C5;
                        width: 80%;
                        border-radius: 5px;
                        padding: 5px 0 ;
                        text-align: center;
                        font-size: 12px;
                    }
                    span{
                        height: 29px;
                        margin-left: 10px;
                        /* align-items: center; */
                    }
                }
        }
    }
`;