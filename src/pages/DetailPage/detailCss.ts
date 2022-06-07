import { css } from '@emotion/react';

export default {
  container: css`
    padding: 21px 0 30px 0;
  `,
  flexRow: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  rowWrpper: css`
    gap: 20px;
    display: flex;
    margin-bottom: 17px;

    width: 1200px;
    @media (min-width: 1920px) {
      // width: 1250px;
      width: 1400px;
    }
  `,
};
