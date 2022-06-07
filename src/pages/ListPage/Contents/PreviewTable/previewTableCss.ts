import { css } from '@emotion/react';

export default {
  container: css`
    padding: 17px 43px 0px 34px;

    .preview-table-header {
      display: flex;
      justify-content: space-between;
      .product-name {
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        color: #0d1559;
      }
      .last-update {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #5b5b5b;
      }
    }
    table {
      width: 100%;
      margin-top: 34px;

      tr:not(:last-of-type) {
        border-bottom: 0.3px solid #c4c4c4;
      }

      tbody > tr {
        height: 36px;
        display: flex;
        align-items: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 15px;
        line-height: 18px;
        color: #5b5b5b;

        th {
          text-align: left;
        }

        .percent-view {
          color: #404cb6;
        }
        .preview-col1 {
          width: 22%;
        }
        .preview-col2 {
          width: 32%;
        }
        .preview-col3 {
          width: 8%;
        }
        .preview-col4 {
          width: 22%;
        }
        .preview-col5 {
          width: 8%;
        }
      }
    }
  `,
};
