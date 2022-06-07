import { css } from '@emotion/react';

export default {
  section: css`
    display: flex;
    justify-content: center;
    margin-bottom: 22px;
  `,
  container: css`
    width: 100%;
    margin-bottom: 22px;

    width: 1200px;
    @media (min-width: 1920px) {
      width: 1400px;
    }

    .chart-container {
      background-color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      overflow: hidden;

      height: 432px;
      display: flex;
      justify-content: center;
    }
  `,
};
