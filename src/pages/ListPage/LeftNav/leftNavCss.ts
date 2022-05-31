import { css } from '@emotion/react';
import { LEFT_NAV_WIDTH } from '@constants/size';

export default {
  container: css`
    position: absolute;
    top: 0;
    width: ${LEFT_NAV_WIDTH}px;
    background-color: #09104b;
    height: 100vh;
    display: flex;
    flex-direction: column;
  `,
  logo: css`
    width: 124px;
    height: 29px;
    margin: 32px 0 46px 38px;
  `,
  nav: css`
    position: relative;
    background-color: #ffffff;
    height: 100%;
    border-radius: 0px 30px 0px 0px;
    padding: 32px 19px 0px 20px;
    flex-grow: 1;
  `,
  profile: css`
    display: flex;
    position: relative;
    margin-bottom: 33px;
  `,
  photo: css`
    width: 60px;
    height: 60px;
    margin-right: 21px;
    border-radius: 30px;
    overflow: hidden;
  `,
  resizePhoto: css`
    width: 60px;
    height: 60px;
  `,
  status: css`
    position: absolute;
    top: 40px;
    left: 52px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #08ac04;
    border: 0.7px solid #ffffff;
  `,
  info: css`
    color: #404cb6;
    width: 147px;
    .name {
      font-family: 'Titillium Web';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
    }
    .position {
      font-family: 'Titillium Web';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 23px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `,
  tab: (selceted: boolean) => css`
    display: flex;
    align-items: center;
    padding: 11px 0 12px 20px;
    border-radius: 6px;
    margin-bottom: 7px;
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #404cb6;
    cursor: pointer;
    background-color: ${selceted ? '#f6faff' : 'inherit'};

    &:hover {
      background-color: #f6faff;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 14px;
    }
  `,
  bottom: css`
    position: absolute;
    bottom: 19px;
    left: 43px;
    display: flex;
    align-items: flex-end;

    img {
      margin-right: 45px;
      cursor: pointer;
    }

    .logout {
      width: 132px;
      background-color: #f6faff;
      border-radius: 6px;
      padding: 11px 21px 12px 18px;
      display: flex;
      align-items: center;
      cursor: pointer;
      font-family: 'Titillium Web';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #404cb6;

      img {
        width: 24px;
        height: 24px;
        margin-right: 17px;
      }
    }
  `,
};
