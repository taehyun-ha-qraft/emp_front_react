import { css } from '@emotion/react';

export default {
  top: css`
    height: 232px;
    background-color: #09104b;
    color: #ffffff;
    text-align: center;
    padding-top: 55px;
    padding-bottom: 44px;
    position: relative;
  `,
  alarm: css`
    width: 24px;
    height: 26.67px;
    /* width: 32px;
    height: 32px; */
    position: absolute;
    top: 26.67px;
    right: 36px;
    cursor: pointer;
  `,
  status: css`
    width: 7px;
    height: 7px;
    position: absolute;
    top: 32px;
    right: 36px;
    background-color: #ef0303;
    border-radius: 7px;
  `,

  title: css`
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 46px;
  `,
  subtitle: css`
    font-family: 'Titillium Web';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #c0c5ee;
  `,
  description: css`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-top: 38px;
  `,
};
