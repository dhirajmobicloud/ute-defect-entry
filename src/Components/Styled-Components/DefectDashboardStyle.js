import styled from 'styled-components'

export const DefectDashboardStyle = styled.div`
background-color: #E8E8E8;
display: flex;
overflow: hidden;

.defects-repaired{
  width: 30%;
  /* height: 100vh; */
  border-right: solid black 1px;
  display: flex;
  flex-direction: column;

/*-------------------- Defects List --------------------*/

.defects-list{
  padding: 10px;
  height: 50%;
  overflow: scroll;
  border-bottom: solid black 1px ;
  ::-webkit-scrollbar {
    display: none;
}

  .defects-heading{
    height: 45px;
    h2{
    text-align: center;
  }
  }

  .defect{
    display: flex;
    margin: 3px ;
    align-items: center;

    .defect-name{
      width: 604px;
      background-color: #FF9B9B;
      border-radius: 5px;
      padding-left: 10px;
    }

    .done{
      margin: 5px;
    }
  }

}

/*-------------------- Repaired List --------------------*/

.repaired-list{
    padding: 10px;
    overflow: scroll;
    height: 50%;
    ::-webkit-scrollbar {
    display: none;
    }

    .repaired-heading{
        height: 45px;
        h2{
        text-align: center;
        }
    }

    .repaired{
        display: flex;
        margin: 10px ;
        align-items: center;
       
        .repaired-name{
            width: 683px;
            background-color: #9CF27E;
            border-radius: 5px;
            padding-left: 10px;
        }
    }
}

}

/* -------------------- Add Defect section -------------------- */

.add-defects{
    display: flex;
    flex-direction: column;
    /* width: 100vw; */

    .vehicle-information{
        height: 30%;
        display: flex;
        
        .info{
            height: 200px;
            width: 700px;
            margin: 20px auto;
            background-color: #C6C0C0;
        }
    }

    /* Segments */

    .defect-segments{
        height: 70%;
        margin-top: 50px;
        .add-defect-heading{
            height: 45px;
                h2{
                    text-align: center;
                    color: #008EAD;
                }
            }
        }

        .segments{
           margin: 20px;
           
           .inner-segment{
                justify-content: center;

                .a-segment{
                    display: flex;
                    width: 185px;
                    height: 60px;
                    margin: 20px ;
                    background-color: #58C8EB;
                    border-radius: 10px;

                    h5{
                        margin: auto;
                        text-align: center;
                    }
                }  
           }
            
        }

    }


`;