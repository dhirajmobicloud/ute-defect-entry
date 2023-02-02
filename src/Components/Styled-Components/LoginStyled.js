import styled from "styled-components";

export const LoginStyled = styled.div`
  width: 100%;
  height: 100%;
  height: 100vh;
  display: flex;
  position: absolute;
  background: linear-gradient(to bottom, #6e529d 0%, #d97b93 100%);

  .LoginCart {
    /* height: 390px; */
    width: 430px;
    border-radius: 15px;
    background-color: hsla(120, 60%, 70%, 0.3);
    /* background-color: #d9d9d9; */
    margin: auto;
  }
  form {
    padding: 40px;
    align-items: center;

    .buttons {
      .btnStyle {
        color: #fff;
        padding: 7px 30px;
        background-color: #2596be;
        background-image: radial-gradient(
            93% 87% at 87% 89%,
            rgba(0, 0, 0, 0.23) 0%,
            transparent 86.18%
          ),
          radial-gradient(
            66% 66% at 26% 20%,
            rgba(255, 255, 255, 0.55) 0%,
            rgba(255, 255, 255, 0) 69.79%,
            rgba(255, 255, 255, 0) 100%
          );
        box-shadow: inset -3px -3px 9px rgba(255, 255, 255, 0.25),
          inset 0px 3px 9px rgba(255, 255, 255, 0.3),
          inset 0px 1px 1px rgba(255, 255, 255, 0.6),
          inset 0px -8px 36px rgba(0, 0, 0, 0.3),
          inset 0px 1px 5px rgba(255, 255, 255, 0.6),
          2px 19px 31px rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        font-weight: bold;
        font-size: 16px;
        border: 0;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        cursor: pointer;
      }

      flex-direction: column;
      padding: 10px;
      button {
        margin: auto;
      }
      span {
        margin: auto;
        padding: 10px;
        cursor: pointer;
      }
    }
  }
`;
