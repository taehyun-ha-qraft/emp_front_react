import { css } from '@emotion/react';

export default {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
  `,
  chartWrapper: css`
    width: 1200px;
    height: 361px;
    background-color: #ffffff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;

    @media (min-width: 1920px) {
      // width: 1250px;
      width: 1400px;
    }
  `,
};
