import { css } from '@emotion/react';

export default {
  container: css`
    .double-pie-wrapper {
      height: 337px;
      display: flex;
      gap: 7px;

      .pie-box {
        background-color: #ffffff;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
        border-radius: 10px;
        overflow: hidden;
        padding: 22px 0 29px 31px;
        display: flex;
        position: relative;
        overflow: visible;

        .toggle-select {
          background: #ffffff;
          // border: 0.5px solid #9da6ad;
          border: 0.5px solid rgba(157, 166, 173, 1);
          box-sizing: border-box;
          // box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
          border-radius: 4px;
          position: absolute;
          right: 0;
          top: 0;
          width: 152px;
          cursor: pointer;
          // margin-right: 26px;

          p {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 13px;
            height: 39px;
            span {
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 12px;
              line-height: 15px;
              color: #000000;
            }
          }

          p:not(:last-of-type) {
            border-bottom: 0.5px solid #c4c4c4;
          }
        }
      }
    }
  `,
};
