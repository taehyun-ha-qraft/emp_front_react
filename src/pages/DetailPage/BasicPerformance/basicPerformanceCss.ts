import { css } from '@emotion/react';

export default {
  container: css`
    flex-grow: 1;
    width: 307px;

    .overview-container {
      background-color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      overflow: hidden;
      padding-top: 9px;

      .small-label {
        font-family: 'Titillium Web';
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 20px;
        color: #404cb6;
        padding-left: 12px;
        margin-bottom: 5px;
      }
      .list {
        // height: 100%;
        background-color: #f8faff;
        padding: 11px 11px 40px 9px;

        .item-row {
          height: 36px;
          background-color: #ffffff;
          border: 0.5px solid #d0d0d0;
          box-sizing: border-box;
          border-radius: 6px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
          padding-right: 26px;

          .item-left {
            padding-left: 26px;
            // width: 170px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 600;
            font-size: 12px;
            line-height: 15px;
            color: #a9aab9;
          }
          .item-right {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 15px;
            color: #555555;
          }
        }
      }
    }
  `,
};
