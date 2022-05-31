import { css } from '@emotion/react';

export default {
  container: css`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #010525;
  `,
  background: css`
    position: absolute;
    top: -2.4%;
    right: 0;
    width: 59%;
    height: 89%;
    min-width: 859.19px;
    min-height: 913.71px;
  `,
  box: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 480px;
    min-width: 480px;
    position: absolute;
    left: 10%;
    top: calc(50% - 74px);
    transform: translateY(-50%);
  `,
  title: css`
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 46px;
    color: #ffffff;
    margin-bottom: 4px;
  `,
  subtitle: css`
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #a9aab9;
    margin-bottom: 54px;
  `,
  inputForm: css`
    display: flex;
    flex-direction: column;
    width: 317px;
    min-width: 317px;

    .error-message {
      color: #ffffff;
    }

    input::placeholder {
      color: #3d468e;
    }
    input:-webkit-autofill {
      box-shadow: 0 0 0 1000px rgba(1, 5, 37, 0.95) inset;
      -webkit-text-fill-color: #ffffff;
    }

    input {
      height: 40px;
      margin-bottom: 11px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #3d468e;
      box-sizing: border-box;
      border-radius: 6px;
      padding-left: 19px;
      color: #ffffff;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      outline: none;
    }

    input.invalid {
      border-color: rgb(250, 80, 80);
    }

    button {
      height: 40px;
      background-color: #283283;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #ffffff;
      margin-top: 8px;
      margin-bottom: 30px;
      border-radius: 6px;
    }
  `,
  contact: css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #a9aab9;

    a {
      text-decoration: underline;
      color: #a9aab9;
    }
  `,
  footer: css`
    width: 100%;
    position: absolute;
    bottom: 36px;
    display: flex;
    justify-content: center;

    .logo {
      width: 124px;
      height: 29px;
    }
  `,
};
