import { css } from '@emotion/react';

export default {
  section: css`
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
  `,
  container: css`
    width: 1200px;
    @media (min-width: 1920px) {
      width: 1400px;
    }

    .table-container {
      background-color: #ffffff;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.13);
      border-radius: 10px;
      overflow: hidden;

      background-color: #f8faff;

      table {
        width: 100%;
        border-collapse: collapse;

        thead {
          background-color: #ffffff;
          tr {
            th {
              padding-top: 18px;
              padding-bottom: 6px;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 600;
              font-size: 16px;
              line-height: 19px;
              color: #5b5b5b;
            }
            th.blank {
              width: 204px;
            }
          }
        }

        tbody {
          background-color: #f8faff;
          border-top: 3px solid #f8faff;
          border-bottom: 8px solid #f8faff;

          tr {
            height: 33px;
            line-height: 33px;

            th {
              text-align: left;
            }
            td {
              text-align: center;
            }
            td.space-start {
              width: 31px;
              border-bottom: 0.3px solid #f8faff;
            }
            td.space-end {
              width: 42px;
              border-bottom: 0.3px solid #f8faff;
            }
          }
          tr:not(:last-of-type) {
            border-bottom: 0.3px solid #c4c4c4;
          }
        }
      }
    }
  `,
};
