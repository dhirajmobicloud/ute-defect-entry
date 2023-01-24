import styled from "styled-components";

export const DashboardStyled = styled.div`
  height: 100vh;
  display: flex;
  background: #d9d9d9;

  .select-defect {
    width: 1366px;
    height: 768px;
    margin: auto;
  }
  .input-fil {
    margin: 2vh;
  }
  .input-fil .Model {
    margin-left: 15vh;
    border-radius: 9px;
    background: #d9d9d9;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  .input-lable {
    padding-left: 25vh;
    display: flex;
    justify-content: space-between;
    padding-right: 39vh;
  }
  .input-fil .period {
    margin-left: 10vh;
    border-radius: 9px;
    background: #d9d9d9;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
  .input-fil .date {
    margin-left: 11vh;
    border-radius: 9px;
    background: #d9d9d9;
    font-weight: bold;
  }

  .defect-list {
    display: flex;
    flex-direction: column;
    background-color: #fff;

    div {
      display: flex;
      height: 30px;
      margin: 10px 10px 10px 0;
      align-items: center;
      background-color: #e8e8e8;
    }
  }
`;
