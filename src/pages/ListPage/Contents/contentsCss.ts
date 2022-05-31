import { css } from '@emotion/react';

export default {
  contents: css`
    display: flex;
    flex-direction: column;
    gap: 13px;
  `,
  row: css`
    display: flex;
    gap: 18px;
    height: 232px;
    justify-content: center;

    .col1 {
      /* width: 1016px; */
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      cursor: pointer;
    }
    .col2 {
      /* width: 558px; */
      height: 100%;
      background-color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      cursor: pointer;
    }

    @media (max-width: 1920px) {
      .col1 {
        flex-grow: 2;
        flex-shrink: 0;
        width: 720px;
      }
      .col2 {
        flex-grow: 1;
        flex-shrink: 0;
        width: 360px;
      }
    }

    @media (min-width: 1920px) {
      .col1 {
        width: 1016px;
      }
      .col2 {
        width: 558px;
      }
    }
  `,
};
