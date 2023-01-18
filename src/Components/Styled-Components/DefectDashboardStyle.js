import styled from 'styled-components'

export const DefectDashboardStyle = styled.div`
background-color: #E8E8E8;

display: flex;

.defects-repaired{
  width: 30%;
  height: 100vh;
  border-right: solid black 1px;
  display: flex;
  flex-direction: column;

  .defects-heading{
    height: 45px;
    h2{
    text-align: center;
    padding: 10px;
  }
  }

.defects-list{
  padding: 10px;

  .defect{
    display: flex;
    margin: 5px ;
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

}

`;